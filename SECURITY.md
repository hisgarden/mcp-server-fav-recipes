# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **DO NOT** create a public GitHub issue
2. Email security details to: jin.wen@hisgarden.org
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

## Security Measures

This project implements the following security practices:

### Dependency Management
- Regular dependency audits using `npm audit`
- Automated security checks in CI/CD pipeline
- Pinned dependency versions in `package-lock.json`

### Code Quality
- ESLint with security-focused rules
- TypeScript for type safety
- Input validation using Zod schemas
- No direct file system access outside designated directories

### Runtime Security
- No execution of user-provided code
- Input sanitization for all user inputs
- Resource access limited to predefined recipe data
- No network requests to external services

### Development Security
- Pre-commit hooks for code quality
- Automated security scanning
- Regular dependency updates
- Secure coding practices

## Security Checklist

- [x] Input validation implemented
- [x] No code injection vulnerabilities
- [x] Dependency vulnerabilities monitored
- [x] Secure coding practices followed
- [x] Regular security audits scheduled
- [x] SBOM generation for supply chain security

## Contact

For security-related questions or reports:
- Email: jin.wen@hisgarden.org
- Response time: Within 48 hours for security issues
