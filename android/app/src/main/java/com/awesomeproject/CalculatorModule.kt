package com.awesomeproject
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalculatorModule(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {

     override fun getName() = NAME
    override fun initialize() {

    }
    override fun canOverrideExistingModule(): Boolean {
        TODO("Not yet implemented")
    }

    override fun onCatalystInstanceDestroy() {
        TODO("Not yet implemented")
    }

    override fun invalidate() {
        TODO("Not yet implemented")
    }

    @ReactMethod
    fun add(a: Double, b: Double, promise: Promise) {
        promise.resolve(a + b)
    }
    companion object {
        const val NAME = "RNCalculator"
    }
}