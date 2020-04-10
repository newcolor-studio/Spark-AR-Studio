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

// This is an example script for v85+ to display blink count

// Load modules
const Scene = require('Scene');
// This module gives us access to objects in the Patch Editor
const Patches = require('Patches');
// Debug Console
const Diagnostics = require('Diagnostics');

// Find the 2D text object in our Scene named 'TheText' listed in the Scene panel on the left.
// Use 'theText' to assign the .text property of 'TheText' 2D object.
Scene.root.findFirst('TheText').then(theText => {

    // Get the output from the 'PatchValue' created in the To Script bridge and updated in the Patch Editor.
    Patches.outputs.getScalar('PatchValue').then(patchValue => {

        // assign the .text property of 'theText' to the patchValue. 
        // convert the patchValue scalar signal to a string using the .toString() method.
        theText.text = patchValue.toString();

        // update the blink count in the Debug Console
        Diagnostics.watch("Blink Count: ", patchValue);

    });
});

