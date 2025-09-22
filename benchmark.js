#!/usr/bin/env node

/**
 * Comprehensive Benchmark Test for TypeScript MCP Server
 * Tests performance, memory usage, and latency
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class BenchmarkRunner {
    constructor() {
        this.results = {
            startup: {},
            memory: {},
            latency: {},
            throughput: {},
            resourceAccess: {}
        };
        this.serverProcess = null;
    }

    async runBenchmarks() {
        console.log('🚀 Starting TypeScript MCP Server Benchmark Tests...\n');
        
        try {
            await this.testStartupTime();
            await this.testMemoryUsage();
            await this.testLatency();
            await this.testThroughput();
            await this.testResourceAccess();
            
            this.generateReport();
        } catch (error) {
            console.error('❌ Benchmark failed:', error);
        } finally {
            this.cleanup();
        }
    }

    async testStartupTime() {
        console.log('⏱️  Testing startup time...');
        const iterations = 10;
        const times = [];

        for (let i = 0; i < iterations; i++) {
            const startTime = process.hrtime.bigint();
            
            // Build the project
            await this.runCommand('npm run build');
            
            const endTime = process.hrtime.bigint();
            const duration = Number(endTime - startTime) / 1000000; // Convert to milliseconds
            times.push(duration);
            
            console.log(`  Iteration ${i + 1}: ${duration.toFixed(2)}ms`);
        }

        this.results.startup = {
            average: times.reduce((a, b) => a + b, 0) / times.length,
            min: Math.min(...times),
            max: Math.max(...times),
            median: times.sort((a, b) => a - b)[Math.floor(times.length / 2)],
            iterations
        };

        console.log(`✅ Startup time: ${this.results.startup.average.toFixed(2)}ms average\n`);
    }

    async testMemoryUsage() {
        console.log('🧠 Testing memory usage...');
        
        const startMemory = process.memoryUsage();
        console.log(`  Initial memory: ${(startMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);

        // Start server process
        this.serverProcess = spawn('node', ['dist/index.js'], {
            stdio: ['pipe', 'pipe', 'pipe']
        });

        // Wait for server to initialize
        await new Promise(resolve => setTimeout(resolve, 2000));

        const serverMemory = process.memoryUsage();
        console.log(`  Server memory: ${(serverMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);

        // Simulate load
        for (let i = 0; i < 100; i++) {
            this.sendMCPRequest('list_resources');
            await new Promise(resolve => setTimeout(resolve, 10));
        }

        const loadMemory = process.memoryUsage();
        console.log(`  Under load: ${(loadMemory.heapUsed / 1024 / 1024).toFixed(2)}MB`);

        this.results.memory = {
            initial: startMemory.heapUsed / 1024 / 1024,
            server: serverMemory.heapUsed / 1024 / 1024,
            underLoad: loadMemory.heapUsed / 1024 / 1024,
            memoryIncrease: (loadMemory.heapUsed - startMemory.heapUsed) / 1024 / 1024
        };

        console.log(`✅ Memory usage: ${this.results.memory.memoryIncrease.toFixed(2)}MB increase\n`);
    }

    async testLatency() {
        console.log('⚡ Testing latency...');
        const iterations = 100;
        const latencies = [];

        for (let i = 0; i < iterations; i++) {
            const startTime = process.hrtime.bigint();
            
            this.sendMCPRequest('list_resources');
            
            const endTime = process.hrtime.bigint();
            const latency = Number(endTime - startTime) / 1000000; // Convert to milliseconds
            latencies.push(latency);
            
            if (i % 20 === 0) {
                console.log(`  Progress: ${i}/${iterations}`);
            }
        }

        this.results.latency = {
            average: latencies.reduce((a, b) => a + b, 0) / latencies.length,
            min: Math.min(...latencies),
            max: Math.max(...latencies),
            p50: latencies.sort((a, b) => a - b)[Math.floor(latencies.length * 0.5)],
            p95: latencies.sort((a, b) => a - b)[Math.floor(latencies.length * 0.95)],
            p99: latencies.sort((a, b) => a - b)[Math.floor(latencies.length * 0.99)],
            iterations
        };

        console.log(`✅ Latency: ${this.results.latency.average.toFixed(2)}ms average (p95: ${this.results.latency.p95.toFixed(2)}ms)\n`);
    }

    async testThroughput() {
        console.log('📊 Testing throughput...');
        const duration = 5000; // 5 seconds
        const startTime = Date.now();
        let requestCount = 0;

        while (Date.now() - startTime < duration) {
            this.sendMCPRequest('list_resources');
            requestCount++;
            
            // Small delay to prevent overwhelming
            await new Promise(resolve => setTimeout(resolve, 1));
        }

        const actualDuration = Date.now() - startTime;
        const throughput = (requestCount / actualDuration) * 1000; // requests per second

        this.results.throughput = {
            requestsPerSecond: throughput,
            totalRequests: requestCount,
            duration: actualDuration
        };

        console.log(`✅ Throughput: ${throughput.toFixed(2)} requests/second\n`);
    }

    async testResourceAccess() {
        console.log('📁 Testing resource access performance...');
        const cuisines = ['French', 'Thai', 'Italian', 'Mexican', 'Chinese', 'Vietnamese'];
        const times = [];

        for (const cuisine of cuisines) {
            const startTime = process.hrtime.bigint();
            
            this.sendMCPRequest('read_resource', { uri: `file://recipes/${cuisine}` });
            
            const endTime = process.hrtime.bigint();
            const duration = Number(endTime - startTime) / 1000000;
            times.push(duration);
            
            console.log(`  ${cuisine}: ${duration.toFixed(2)}ms`);
        }

        this.results.resourceAccess = {
            average: times.reduce((a, b) => a + b, 0) / times.length,
            min: Math.min(...times),
            max: Math.max(...times),
            perCuisine: cuisines.reduce((acc, cuisine, i) => {
                acc[cuisine] = times[i];
                return acc;
            }, {})
        };

        console.log(`✅ Resource access: ${this.results.resourceAccess.average.toFixed(2)}ms average\n`);
    }

    sendMCPRequest(method, params = {}) {
        if (!this.serverProcess) return;
        
        const request = {
            jsonrpc: "2.0",
            id: Date.now(),
            method: method,
            params: params
        };

        this.serverProcess.stdin.write(JSON.stringify(request) + '\n');
    }

    async runCommand(command) {
        return new Promise((resolve, reject) => {
            const [cmd, ...args] = command.split(' ');
            const process = spawn(cmd, args, { stdio: 'pipe' });
            
            process.on('close', (code) => {
                if (code === 0) resolve();
                else reject(new Error(`Command failed with code ${code}`));
            });
        });
    }

    generateReport() {
        console.log('📋 BENCHMARK REPORT - TypeScript MCP Server');
        console.log('=' .repeat(50));
        
        console.log('\n🚀 STARTUP PERFORMANCE:');
        console.log(`  Average: ${this.results.startup.average.toFixed(2)}ms`);
        console.log(`  Min: ${this.results.startup.min.toFixed(2)}ms`);
        console.log(`  Max: ${this.results.startup.max.toFixed(2)}ms`);
        console.log(`  Median: ${this.results.startup.median.toFixed(2)}ms`);

        console.log('\n🧠 MEMORY USAGE:');
        console.log(`  Initial: ${this.results.memory.initial.toFixed(2)}MB`);
        console.log(`  Server: ${this.results.memory.server.toFixed(2)}MB`);
        console.log(`  Under Load: ${this.results.memory.underLoad.toFixed(2)}MB`);
        console.log(`  Increase: ${this.results.memory.memoryIncrease.toFixed(2)}MB`);

        console.log('\n⚡ LATENCY:');
        console.log(`  Average: ${this.results.latency.average.toFixed(2)}ms`);
        console.log(`  P50: ${this.results.latency.p50.toFixed(2)}ms`);
        console.log(`  P95: ${this.results.latency.p95.toFixed(2)}ms`);
        console.log(`  P99: ${this.results.latency.p99.toFixed(2)}ms`);

        console.log('\n📊 THROUGHPUT:');
        console.log(`  Requests/sec: ${this.results.throughput.requestsPerSecond.toFixed(2)}`);
        console.log(`  Total requests: ${this.results.throughput.totalRequests}`);

        console.log('\n📁 RESOURCE ACCESS:');
        console.log(`  Average: ${this.results.resourceAccess.average.toFixed(2)}ms`);
        Object.entries(this.results.resourceAccess.perCuisine).forEach(([cuisine, time]) => {
            console.log(`  ${cuisine}: ${time.toFixed(2)}ms`);
        });

        // Save results to file
        fs.writeFileSync('benchmark-results.json', JSON.stringify(this.results, null, 2));
        console.log('\n💾 Results saved to benchmark-results.json');
    }

    cleanup() {
        if (this.serverProcess) {
            this.serverProcess.kill();
        }
    }
}

// Run benchmarks
const runner = new BenchmarkRunner();
runner.runBenchmarks().catch(console.error);
