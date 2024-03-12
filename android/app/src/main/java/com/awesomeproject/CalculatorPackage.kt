package com.awesomeproject

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
class CalculatorPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return when (name) {
            CalculatorModule.NAME -> CalculatorModule(reactContext)
            else -> null
        }
    }
    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                CalculatorModule.NAME to ReactModuleInfo(
                    CalculatorModule.NAME,
                    CalculatorModule.NAME,
                    false,
                    false,
                    true,
                    false,
                    false
                )
            )
        }
    }
}