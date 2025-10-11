# IoT Connected Greenhouse - Smart Agriculture

## Overview

Design and realization of a **connected greenhouse** using IoT technologies to optimize agricultural growing conditions while minimizing resource consumption. Complete system integrating environmental sensors, LoRaWAN transmission, cloud visualization, and actuator automation.

## Context & Problem Statement

### Environmental Challenges

Agriculture is on the front line of climate change, facing major challenges:
- **Carbon impact**: 10-12% of human-caused GHG emissions
- **Water scarcity** and increasingly harsh climate conditions
- Need to optimize resources (heating, irrigation) while maintaining productivity

### Problem Statement

**How to use IoT technologies to improve agricultural productivity in greenhouses while optimizing resource usage?**

## Objectives

Develop a functional prototype to:
- Monitor greenhouse environmental conditions in real-time
- Transmit data to a cloud platform for analysis
- Automate actuators (heating, ventilation, irrigation) based on actual needs

## System Architecture

![System Synoptic](/projects/serre-iot-synoptique.png)

### 1. Environmental Sensors

**BME680** (I2C):
- Temperature
- Air humidity
- Atmospheric pressure
- Air quality (IAQ)

**LM94021** (ADC):
- Temperature (reference sensor selected for stability)

### 2. Microcontroller

**OCASS Board**:
- Data collection every 15 seconds (Timer 6)
- Signal processing and conditioning
- Actuator control via downlinks
- Embedded C programming

**Interfaces used:**
- ADC for LM94021
- I2C for BME680
- LoRaWAN for wireless transmission

### 3. LoRaWAN Transmission

**Technical Choice:**
- Range: ~10 km in rural environment
- Low energy consumption
- Reasonable cost
- The Things Network (TTN) for reception

**Alternatives studied:**
- WiFi rejected: limited range (~10m), high consumption, interference-sensitive

### 4. Cloud Platform - Datacake

![Datacake Dashboard](/projects/serre-iot-dashboard.png)

**Two developed dashboards:**

**Simplified dashboard:**
- Quick visualization of essential data
- Manual actuator control buttons
- Fast actions in emergency

**Complete dashboard:**
- Historical graphs for trend analysis
- All environmental metrics
- Automation rules configuration

### 5. Automation & Actuators

**Automated actions (Datacake Rules):**
- **Heating**: Activation if temperature < threshold
- **Ventilation**: Trigger if poor air quality
- **Irrigation**: Activation if humidity too low
- **SMS Alerts**: Notifications for critical conditions

**Manual controls:**
- Individual buttons per actuator
- Emergency button for global shutdown

## Testing & Validation

### 2-Phase Test Protocol

**Phase 1 - LM94021 only:**
- General operation validation with USART available
- Comparison of sent vs received data
- Downlink testing with indicator LED
- ✅ Transmission and reception validated

**Phase 2 - BME680 Integration:**
- I2C communication (replaces USART)
- Data consistency validation on platform
- Multi-parameter display verification
- ✅ All metrics operational

### Results Obtained

**Temperature sensors:**
- **LM94021**: Stable, reliable, selected as reference
- **BME680**: Variations up to 3°C between measurements, constant 1°C offset
- → Decision: Use LM94021 for temperature

**Other BME680 parameters:**
- ✅ Humidity: Accurate and consistent
- ✅ Atmospheric pressure: Reliable
- ✅ Air quality: Usable for ventilation control

**Automation:**
- ✅ Downlinks received and processed correctly
- ✅ Actions triggered according to configured rules
- ✅ LED test validated (actuator proof of concept)

## Impact & Optimization

### Resource Savings

**Reactive and adaptive system:**
- Heating activated only when necessary
- Irrigation triggered based on actual needs (no waste)
- Ventilation optimized according to air quality
- → **Significant reduction in water and energy consumption**

### Optimal Growing Conditions

- Continuous 24/7 monitoring
- Reactivity to environmental variations
- Historical data for analysis and predictions
- Alerts for critical conditions

## Future Prospects

### Technical Extensions
- **Additional sensors**: Soil moisture, sunlight, CO₂
- **Artificial intelligence**: Weather predictions and plant needs
- **Field testing**: Validation in real production conditions

### Extended Applications
- Underground urban mushroom farms
- Urban green space management
- Specialized crops (aromatic herbs, microgreens)

## Technologies Used

**Hardware**: BME680, LM94021, OCASS board, actuators (relays)

**Communication**: LoRaWAN (868 MHz), The Things Network (TTN), I2C, ADC, UART

**Programming**: Embedded C, LoRaWAN configuration

**Cloud**: Datacake (dashboards, alerts, API)

## Skills Developed

- Embedded systems (C, timers, ADC, I2C, UART)
- IoT protocols (LoRaWAN, ABP, duty cycle management)
- Cloud architecture (TTN, Datacake, API)
- Environmental sensors and calibration
- Remote automation and control
- Energy optimization for autonomous systems
