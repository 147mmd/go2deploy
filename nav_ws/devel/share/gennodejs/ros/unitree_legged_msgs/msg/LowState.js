// Auto-generated. Do not edit!

// (in-package unitree_legged_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let IMU = require('./IMU.js');
let MotorState = require('./MotorState.js');

//-----------------------------------------------------------

class LowState {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.levelFlag = null;
      this.commVersion = null;
      this.robotID = null;
      this.SN = null;
      this.bandWidth = null;
      this.imu = null;
      this.motorState = null;
      this.footForce = null;
      this.footForceEst = null;
      this.tick = null;
      this.wirelessRemote = null;
      this.reserve = null;
      this.crc = null;
    }
    else {
      if (initObj.hasOwnProperty('levelFlag')) {
        this.levelFlag = initObj.levelFlag
      }
      else {
        this.levelFlag = 0;
      }
      if (initObj.hasOwnProperty('commVersion')) {
        this.commVersion = initObj.commVersion
      }
      else {
        this.commVersion = 0;
      }
      if (initObj.hasOwnProperty('robotID')) {
        this.robotID = initObj.robotID
      }
      else {
        this.robotID = 0;
      }
      if (initObj.hasOwnProperty('SN')) {
        this.SN = initObj.SN
      }
      else {
        this.SN = 0;
      }
      if (initObj.hasOwnProperty('bandWidth')) {
        this.bandWidth = initObj.bandWidth
      }
      else {
        this.bandWidth = 0;
      }
      if (initObj.hasOwnProperty('imu')) {
        this.imu = initObj.imu
      }
      else {
        this.imu = new IMU();
      }
      if (initObj.hasOwnProperty('motorState')) {
        this.motorState = initObj.motorState
      }
      else {
        this.motorState = new Array(20).fill(new MotorState());
      }
      if (initObj.hasOwnProperty('footForce')) {
        this.footForce = initObj.footForce
      }
      else {
        this.footForce = new Array(4).fill(0);
      }
      if (initObj.hasOwnProperty('footForceEst')) {
        this.footForceEst = initObj.footForceEst
      }
      else {
        this.footForceEst = new Array(4).fill(0);
      }
      if (initObj.hasOwnProperty('tick')) {
        this.tick = initObj.tick
      }
      else {
        this.tick = 0;
      }
      if (initObj.hasOwnProperty('wirelessRemote')) {
        this.wirelessRemote = initObj.wirelessRemote
      }
      else {
        this.wirelessRemote = new Array(40).fill(0);
      }
      if (initObj.hasOwnProperty('reserve')) {
        this.reserve = initObj.reserve
      }
      else {
        this.reserve = 0;
      }
      if (initObj.hasOwnProperty('crc')) {
        this.crc = initObj.crc
      }
      else {
        this.crc = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type LowState
    // Serialize message field [levelFlag]
    bufferOffset = _serializer.uint8(obj.levelFlag, buffer, bufferOffset);
    // Serialize message field [commVersion]
    bufferOffset = _serializer.uint16(obj.commVersion, buffer, bufferOffset);
    // Serialize message field [robotID]
    bufferOffset = _serializer.uint16(obj.robotID, buffer, bufferOffset);
    // Serialize message field [SN]
    bufferOffset = _serializer.uint32(obj.SN, buffer, bufferOffset);
    // Serialize message field [bandWidth]
    bufferOffset = _serializer.uint8(obj.bandWidth, buffer, bufferOffset);
    // Serialize message field [imu]
    bufferOffset = IMU.serialize(obj.imu, buffer, bufferOffset);
    // Check that the constant length array field [motorState] has the right length
    if (obj.motorState.length !== 20) {
      throw new Error('Unable to serialize array field motorState - length must be 20')
    }
    // Serialize message field [motorState]
    obj.motorState.forEach((val) => {
      bufferOffset = MotorState.serialize(val, buffer, bufferOffset);
    });
    // Check that the constant length array field [footForce] has the right length
    if (obj.footForce.length !== 4) {
      throw new Error('Unable to serialize array field footForce - length must be 4')
    }
    // Serialize message field [footForce]
    bufferOffset = _arraySerializer.int16(obj.footForce, buffer, bufferOffset, 4);
    // Check that the constant length array field [footForceEst] has the right length
    if (obj.footForceEst.length !== 4) {
      throw new Error('Unable to serialize array field footForceEst - length must be 4')
    }
    // Serialize message field [footForceEst]
    bufferOffset = _arraySerializer.int16(obj.footForceEst, buffer, bufferOffset, 4);
    // Serialize message field [tick]
    bufferOffset = _serializer.uint32(obj.tick, buffer, bufferOffset);
    // Check that the constant length array field [wirelessRemote] has the right length
    if (obj.wirelessRemote.length !== 40) {
      throw new Error('Unable to serialize array field wirelessRemote - length must be 40')
    }
    // Serialize message field [wirelessRemote]
    bufferOffset = _arraySerializer.uint8(obj.wirelessRemote, buffer, bufferOffset, 40);
    // Serialize message field [reserve]
    bufferOffset = _serializer.uint32(obj.reserve, buffer, bufferOffset);
    // Serialize message field [crc]
    bufferOffset = _serializer.uint32(obj.crc, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type LowState
    let len;
    let data = new LowState(null);
    // Deserialize message field [levelFlag]
    data.levelFlag = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [commVersion]
    data.commVersion = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [robotID]
    data.robotID = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [SN]
    data.SN = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [bandWidth]
    data.bandWidth = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [imu]
    data.imu = IMU.deserialize(buffer, bufferOffset);
    // Deserialize message field [motorState]
    len = 20;
    data.motorState = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.motorState[i] = MotorState.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [footForce]
    data.footForce = _arrayDeserializer.int16(buffer, bufferOffset, 4)
    // Deserialize message field [footForceEst]
    data.footForceEst = _arrayDeserializer.int16(buffer, bufferOffset, 4)
    // Deserialize message field [tick]
    data.tick = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [wirelessRemote]
    data.wirelessRemote = _arrayDeserializer.uint8(buffer, bufferOffset, 40)
    // Deserialize message field [reserve]
    data.reserve = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [crc]
    data.crc = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 169;
  }

  static datatype() {
    // Returns string type for a message object
    return 'unitree_legged_msgs/LowState';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7e531980fef61bce444b1f441321eee6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint8 levelFlag
    uint16 commVersion
    uint16 robotID
    uint32 SN
    uint8 bandWidth
    IMU imu
    MotorState[20] motorState
    int16[4] footForce	
    int16[4] footForceEst
    uint32 tick	
    uint8[40] wirelessRemote 
    uint32 reserve
    uint32 crc
    
    
    	
    					
    
    
    
    
    
    
    ================================================================================
    MSG: unitree_legged_msgs/IMU
    float32[4] quaternion
    float32[3] gyroscope
    float32[3] accelerometer
    float32[3] rpy
    int8 temperature
    ================================================================================
    MSG: unitree_legged_msgs/MotorState
    uint8 mode           # motor current mode 
    float32 q            # motor current position（rad）
    float32 dq           # motor current speed（rad/s）
    float32 ddq          # motor current speed（rad/s）
    float32 tauEst       # current estimated output torque（N*m）
    float32 q_raw        # motor current position（rad）
    float32 dq_raw       # motor current speed（rad/s）
    float32 ddq_raw      # motor current speed（rad/s）
    int8 temperature     # motor temperature（slow conduction of temperature leads to lag）
    uint32[2] reserve
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new LowState(null);
    if (msg.levelFlag !== undefined) {
      resolved.levelFlag = msg.levelFlag;
    }
    else {
      resolved.levelFlag = 0
    }

    if (msg.commVersion !== undefined) {
      resolved.commVersion = msg.commVersion;
    }
    else {
      resolved.commVersion = 0
    }

    if (msg.robotID !== undefined) {
      resolved.robotID = msg.robotID;
    }
    else {
      resolved.robotID = 0
    }

    if (msg.SN !== undefined) {
      resolved.SN = msg.SN;
    }
    else {
      resolved.SN = 0
    }

    if (msg.bandWidth !== undefined) {
      resolved.bandWidth = msg.bandWidth;
    }
    else {
      resolved.bandWidth = 0
    }

    if (msg.imu !== undefined) {
      resolved.imu = IMU.Resolve(msg.imu)
    }
    else {
      resolved.imu = new IMU()
    }

    if (msg.motorState !== undefined) {
      resolved.motorState = new Array(20)
      for (let i = 0; i < resolved.motorState.length; ++i) {
        if (msg.motorState.length > i) {
          resolved.motorState[i] = MotorState.Resolve(msg.motorState[i]);
        }
        else {
          resolved.motorState[i] = new MotorState();
        }
      }
    }
    else {
      resolved.motorState = new Array(20).fill(new MotorState())
    }

    if (msg.footForce !== undefined) {
      resolved.footForce = msg.footForce;
    }
    else {
      resolved.footForce = new Array(4).fill(0)
    }

    if (msg.footForceEst !== undefined) {
      resolved.footForceEst = msg.footForceEst;
    }
    else {
      resolved.footForceEst = new Array(4).fill(0)
    }

    if (msg.tick !== undefined) {
      resolved.tick = msg.tick;
    }
    else {
      resolved.tick = 0
    }

    if (msg.wirelessRemote !== undefined) {
      resolved.wirelessRemote = msg.wirelessRemote;
    }
    else {
      resolved.wirelessRemote = new Array(40).fill(0)
    }

    if (msg.reserve !== undefined) {
      resolved.reserve = msg.reserve;
    }
    else {
      resolved.reserve = 0
    }

    if (msg.crc !== undefined) {
      resolved.crc = msg.crc;
    }
    else {
      resolved.crc = 0
    }

    return resolved;
    }
};

module.exports = LowState;
