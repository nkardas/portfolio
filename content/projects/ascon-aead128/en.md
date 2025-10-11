# ASCON-AEAD128 - Authenticated Encryption

## Overview

**SystemVerilog** implementation of the **ASCON-AEAD128** algorithm, an Authenticated Encryption with Associated Data (AEAD) algorithm. This project develops a hardware solution to secure communications while ensuring confidentiality, authenticity, and message integrity.

## Context and Objectives

The project addresses the need for secure communication between two parties (Alice and Bob) wishing to exchange confidential messages while protecting against eavesdropping and tampering. ASCON-AEAD128 combines three essential security guarantees:

- **Confidentiality**: Message content is encrypted and unreadable to third parties
- **Authenticity**: An authentication tag proves the sender's identity
- **Integrity**: The recipient can verify that the message has not been altered

The recipient recalculates the tag from the encrypted message to simultaneously validate the sender's identity and content integrity.

## Hardware Architecture

### Algorithm Phases

The implementation follows the four standard ASCON phases:

1. **Initialization**: Configuration with secret key and nonce
2. **Associated Data**: Processing of unencrypted metadata
3. **Encryption**: Transformation of plaintext to ciphertext
4. **Finalization**: Authentication tag generation

### Hardware Components

- **State Registers (320 bits)**: Storage of algorithm intermediate values
- **XOR Operations**: Cryptographic data combination
- **Multiplexers**: Dynamic data flow routing
- **Permutation Module**: Complex cryptographic transformations
- **Finite State Machine (FSM)**: Sequential operation orchestration
- **Counters**: Data block and permutation round management

## Technical Challenges

**Synchronization**: Coordinate permutation operations with FSM state changes to respect algorithm timing.

**Hardware Optimization**: Balance performance and FPGA resource consumption (registers, LUTs, DSPs).

**Validation**: Verify compliance with official ASCON test vectors via timing diagrams and simulations.

## Technologies Used

**Language**: SystemVerilog

**Algorithm**: ASCON-AEAD128

**Target**: FPGA (programmable circuits)

**Tools**: Hardware simulation, timing diagrams

## Skills Developed

- Hardware cryptographic system design
- Digital circuit modeling in SystemVerilog
- Complex finite state machine architecture
- Authenticated encryption algorithms (AEAD)
- Validation through simulation and test vectors
