/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
// This module gives us access to objects in the Patch Editor
const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Find the 2D Text Object in our Scene named 'SceneText' listed in the left panel
// Hold the value of that object in a variable called 'textObject'
const textObject = Scene.root.find('2dText0');

// Get the scalar value from our 'ValueFromPatch' object listed in the right panel 'To Script' when script.js is selected
// Hold the value in a variable called 'patchValue'
const patchValue = Patches.getScalarValue('ValueFromPatch');

// Set the textObject text to the patchValue using the toString() method
// Converts the patchValue to a strin, which is compatible with the textObject.text method.
textObject.text = patchValue.toString();

// Display our Mouth Openness value in the Console
Diagnostics.watch("Mouth Openness - ", patchValue);
