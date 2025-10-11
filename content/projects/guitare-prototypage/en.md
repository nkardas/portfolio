# Training Guitar - Capacitive Sensors

## Overview

Design of a **training guitar for beginners** using capacitive sensors to detect pressure on strings and frets. Real-time visual feedback via LED matrix to help novice guitarists position their fingers correctly.

## Problem Statement

### Learning Challenge

Learning guitar, while facilitated by online tutorials (YouTube), remains difficult for beginners:
- **Pressure on strings** must be correct to obtain the right sound
- A beginner without musical ear cannot easily detect if pressure is insufficient
- Notes sound wrong but the error is difficult to identify

### Question

**How to help a beginner know if they are pressing the guitar strings correctly?**

## Innovative Solution

### Principle: Capacitive Sensors

Guitar strings and frets are **metallic** → use as **1-electrode capacitive sensors**:
- **Positive electrode**: String or fret (5V applied)
- **Negative electrode**: Guitarist's finger (ground)
- Contact modifies capacitance detectably

By combining string + fret information, we can identify which note is played.

### Visual Display

**4×2 LED Matrix** (4 strings × 2 frets):
- Each LED represents a fretboard position
- LED on = string AND fret correctly pressed
- **Advantage**: Precisely locates error (vs OLED screen showing only note name)

## Theoretical Validation

### COMSOL Multiphysics Simulation

**1. Guitar strings (2D)**
- Modeling: Rectangle 0.5mm × 1m (nickel-plated steel)
- Parameter: Finger-string distance (0-20mm)
- **Results**:
  - Contact: **5 nF**
  - No contact: **~10 pF**
  - → **×500** detectable variation ✅

**2. Guitar frets**
- Modeling: Rectangle 20mm × 30mm + string + finger
- Parameter: String/finger assembly ↔ fret distance
- **Results**:
  - Contact: **3 nF**
  - No contact: **~10 pF**
  - → Detectable variation ✅

## Prototype Architecture

### Main Components

**1. Sensors**
- 4 guitar strings (shortened)
- 2 frets (metal pieces)
- = 6 capacitive electrodes

**2. Conditioning Circuits**
- 6 analog circuits (1 per electrode)
- Capacitance → square signal conversion

**3. Microcontroller**
- **Nucleo64 L152RE** (STM32)
- Timers for frequency measurement
- GPIO for LED control

**4. 4×2 LED Matrix**
- Real-time display
- 100Ω resistors

**5. Integration**
- Custom interface PCB (Kicad)
- 3D-printed enclosure

## Conditioning Circuit

### Operating Principle

**Objective**: Convert capacitance variation into square signal whose frequency reflects capacitance.

**Architecture (3 Op-Amps):**

1. **Voltage divider bridge**
   - 5V → 2.5V (2× 10kΩ resistors)
   - Follower for stability

2. **Voltage/Current converter**
   - Constant charge current on electrode

3. **Hysteresis comparator**
   - Triangular signal → square signal (0-5V)
   - Thresholds: 0V and 5V

**Mathematical relation:**
```
C = 1 / (R₆ × F)
```
where F = square signal frequency

### Simulation Validation (PartQuest)

- Finger-electrode distance variation
- Conforming square and triangular signals obtained
- Resistor calibration validated ✅

### Implementation

- Electrical schematic under **Kicad**
- PCB without vias for simplification
- 6 circuits fabricated and tested

## STM32 Programming

### Nucleo L152RE Configuration

**Timers (Input Capture Mode with interrupts):**
- **TIM5** (32-bit, high precision): 2 channels
- **TIM2/TIM3** (16-bit): Additional channels
- Interrupt on rising edge of square signal

**GPIO:**
- 8 outputs for 4×2 LED matrix control

### Detection Algorithm

**1. Capacitance measurement**
- Frequency calculation in interrupt callback
- Averaging to smooth values
- Period → capacitance conversion in `while` loop

**2. Press detection**
- **Threshold: 30 pF** (between 10pF idle and 3-5nF contact)
- **Double condition for LED**:
  - Fret touched (row)
  - AND String touched (column)

### Technical Limitations

- Only TIM5 high precision timer (32-bit)
- TIM2/TIM3 less precise (16-bit) → sometimes unstable values
- Sufficient for functional prototype

## Technologies Used

**Electronics**: STM32 L476RG, TLC555 (oscillator), 4×2 LED matrix

**Sensors**: Capacitive sensors (strings and frets as electrodes)

**Programming**: Embedded C, timers, GPIO

**Simulation**: COMSOL Multiphysics (capacitive validation)

## Future Prospects

### Technical Improvements

**Full guitar:**
- More powerful microcontroller (more precise timers)
- **Bluetooth** module for smartphone transmission
- Mobile app displaying virtual fretboard
- Discreet integration in guitar body

### Future Applications

**1. Playing correction**
Detect accidentally touched neighboring strings that alter sound.

**2. Score tracking**
App comparing in real-time what is played vs displayed score.

**3. Automatic score generation**
Recording played notes → automatic score creation (solo memorization).

## Learnings

### Multidisciplinary Skills

**Electronics:**
- Analog conditioning circuit design
- Op-Amp and comparator mastery
- PCB design and fabrication

**Embedded Programming:**
- Timers in Input Capture mode
- Interrupt management
- Real-time signal processing

**Physics:**
- 1-electrode capacitive sensors
- Multiphysics simulations (COMSOL)
- Theoretical validation before prototyping

**Prototyping:**
- 3D printing for enclosure
- Mechanical/electronic integration
- Complete system testing and validation
