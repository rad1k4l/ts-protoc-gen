// source: proto/examplecom/primitive_message_v3.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.examplecom.PrimitiveMessageV3', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.examplecom.PrimitiveMessageV3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.PrimitiveMessageV3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.examplecom.PrimitiveMessageV3.displayName = 'proto.examplecom.PrimitiveMessageV3';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.examplecom.PrimitiveMessageV3.prototype.toObject = function(opt_includeInstance) {
  return proto.examplecom.PrimitiveMessageV3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.examplecom.PrimitiveMessageV3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.PrimitiveMessageV3.toObject = function(includeInstance, msg) {
  var f, obj = {
    myDouble: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    myFloat: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    myInt32: jspb.Message.getFieldWithDefault(msg, 3, 0),
    myInt64: jspb.Message.getFieldWithDefault(msg, 4, 0),
    myUint32: jspb.Message.getFieldWithDefault(msg, 5, 0),
    myUint64: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mySint32: jspb.Message.getFieldWithDefault(msg, 7, 0),
    mySint64: jspb.Message.getFieldWithDefault(msg, 8, 0),
    myFixed32: jspb.Message.getFieldWithDefault(msg, 9, 0),
    myFixed64: jspb.Message.getFieldWithDefault(msg, 10, 0),
    mySfixed32: jspb.Message.getFieldWithDefault(msg, 11, 0),
    mySfixed64: jspb.Message.getFieldWithDefault(msg, 12, 0),
    myBool: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    myString: jspb.Message.getFieldWithDefault(msg, 14, ""),
    myBytes: msg.getMyBytes_asB64(),
    myNumber: jspb.Message.getFieldWithDefault(msg, 16, 0),
    optDouble: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    optFloat: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    optInt32: jspb.Message.getFieldWithDefault(msg, 19, 0),
    optInt64: jspb.Message.getFieldWithDefault(msg, 20, 0),
    optUint32: jspb.Message.getFieldWithDefault(msg, 21, 0),
    optUint64: jspb.Message.getFieldWithDefault(msg, 22, 0),
    optSint32: jspb.Message.getFieldWithDefault(msg, 23, 0),
    optSint64: jspb.Message.getFieldWithDefault(msg, 24, 0),
    optFixed32: jspb.Message.getFieldWithDefault(msg, 25, 0),
    optFixed64: jspb.Message.getFieldWithDefault(msg, 26, 0),
    optSfixed32: jspb.Message.getFieldWithDefault(msg, 27, 0),
    optSfixed64: jspb.Message.getFieldWithDefault(msg, 28, 0),
    optBool: jspb.Message.getBooleanFieldWithDefault(msg, 29, false),
    optString: jspb.Message.getFieldWithDefault(msg, 30, ""),
    optBytes: msg.getOptBytes_asB64(),
    optNumber: jspb.Message.getFieldWithDefault(msg, 32, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.examplecom.PrimitiveMessageV3}
 */
proto.examplecom.PrimitiveMessageV3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.examplecom.PrimitiveMessageV3;
  return proto.examplecom.PrimitiveMessageV3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.PrimitiveMessageV3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.PrimitiveMessageV3}
 */
proto.examplecom.PrimitiveMessageV3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMyDouble(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMyFloat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMyInt32(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMyInt64(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMyUint32(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMyUint64(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setMySint32(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setMySint64(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setMyFixed32(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setMyFixed64(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setMySfixed32(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setMySfixed64(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMyBool(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMyString(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMyBytes(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMyNumber(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOptDouble(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setOptFloat(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptInt32(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOptInt64(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOptUint32(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOptUint64(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setOptSint32(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setOptSint64(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setOptFixed32(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setOptFixed64(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setOptSfixed32(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setOptSfixed64(value);
      break;
    case 29:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOptBool(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptString(value);
      break;
    case 31:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOptBytes(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOptNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.examplecom.PrimitiveMessageV3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.PrimitiveMessageV3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.examplecom.PrimitiveMessageV3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMyDouble();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMyFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMyInt32();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getMyInt64();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMyUint32();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMyUint64();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMySint32();
  if (f !== 0) {
    writer.writeSint32(
      7,
      f
    );
  }
  f = message.getMySint64();
  if (f !== 0) {
    writer.writeSint64(
      8,
      f
    );
  }
  f = message.getMyFixed32();
  if (f !== 0) {
    writer.writeFixed32(
      9,
      f
    );
  }
  f = message.getMyFixed64();
  if (f !== 0) {
    writer.writeFixed64(
      10,
      f
    );
  }
  f = message.getMySfixed32();
  if (f !== 0) {
    writer.writeSfixed32(
      11,
      f
    );
  }
  f = message.getMySfixed64();
  if (f !== 0) {
    writer.writeSfixed64(
      12,
      f
    );
  }
  f = message.getMyBool();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getMyString();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getMyBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
  f = message.getMyNumber();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeDouble(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeSint32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeSint64(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeFixed32(
      25,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeFixed64(
      26,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 27));
  if (f != null) {
    writer.writeSfixed32(
      27,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeSfixed64(
      28,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 29));
  if (f != null) {
    writer.writeBool(
      29,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeString(
      30,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeBytes(
      31,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeInt32(
      32,
      f
    );
  }
};


/**
 * optional double my_double = 1;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyDouble = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float my_float = 2;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyFloat = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int32 my_int32 = 3;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyInt32 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 my_int64 = 4;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyInt64 = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 my_uint32 = 5;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyUint32 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 my_uint64 = 6;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyUint64 = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional sint32 my_sint32 = 7;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMySint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMySint32 = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional sint64 my_sint64 = 8;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMySint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMySint64 = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional fixed32 my_fixed32 = 9;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyFixed32 = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional fixed64 my_fixed64 = 10;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyFixed64 = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional sfixed32 my_sfixed32 = 11;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMySfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMySfixed32 = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional sfixed64 my_sfixed64 = 12;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMySfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMySfixed64 = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bool my_bool = 13;
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyBool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string my_string = 14;
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyString = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bytes my_bytes = 15;
 * @return {!(string|Uint8Array)}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes my_bytes = 15;
 * This is a type-conversion wrapper around `getMyBytes()`
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMyBytes()));
};


/**
 * optional bytes my_bytes = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMyBytes()`
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMyBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};


/**
 * optional int32 my_NUMBER = 16;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getMyNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setMyNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional double opt_double = 17;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptDouble = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptDouble = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptDouble = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional float opt_float = 18;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptFloat = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptFloat = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptFloat = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 opt_int32 = 19;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptInt32 = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptInt32 = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptInt32 = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int64 opt_int64 = 20;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptInt64 = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptInt64 = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptInt64 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 opt_uint32 = 21;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptUint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptUint32 = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptUint32 = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptUint32 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional uint64 opt_uint64 = 22;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptUint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptUint64 = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptUint64 = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptUint64 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional sint32 opt_sint32 = 23;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptSint32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptSint32 = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptSint32 = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptSint32 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional sint64 opt_sint64 = 24;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptSint64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptSint64 = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptSint64 = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptSint64 = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional fixed32 opt_fixed32 = 25;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptFixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptFixed32 = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptFixed32 = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptFixed32 = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional fixed64 opt_fixed64 = 26;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptFixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptFixed64 = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptFixed64 = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptFixed64 = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional sfixed32 opt_sfixed32 = 27;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptSfixed32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptSfixed32 = function(value) {
  return jspb.Message.setField(this, 27, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptSfixed32 = function() {
  return jspb.Message.setField(this, 27, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptSfixed32 = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional sfixed64 opt_sfixed64 = 28;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptSfixed64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptSfixed64 = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptSfixed64 = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptSfixed64 = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional bool opt_bool = 29;
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 29, false));
};


/**
 * @param {boolean} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptBool = function(value) {
  return jspb.Message.setField(this, 29, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptBool = function() {
  return jspb.Message.setField(this, 29, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptBool = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional string opt_string = 30;
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptString = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptString = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptString = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional bytes opt_bytes = 31;
 * @return {!(string|Uint8Array)}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * optional bytes opt_bytes = 31;
 * This is a type-conversion wrapper around `getOptBytes()`
 * @return {string}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOptBytes()));
};


/**
 * optional bytes opt_bytes = 31;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOptBytes()`
 * @return {!Uint8Array}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOptBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptBytes = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptBytes = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptBytes = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional int32 opt_NUMBER = 32;
 * @return {number}
 */
proto.examplecom.PrimitiveMessageV3.prototype.getOptNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {number} value
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.setOptNumber = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.examplecom.PrimitiveMessageV3} returns this
 */
proto.examplecom.PrimitiveMessageV3.prototype.clearOptNumber = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.examplecom.PrimitiveMessageV3.prototype.hasOptNumber = function() {
  return jspb.Message.getField(this, 32) != null;
};


goog.object.extend(exports, proto.examplecom);
