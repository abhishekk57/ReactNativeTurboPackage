package com.awesomeproject

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class PermissionPackage : TurboReactPackage() {
    override fun getModule(p0: String, p1: ReactApplicationContext): NativeModule? {
        return  when (p0) {
            PermissionModule.PermModuleName -> PermissionModule(p1)
            else -> null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                PermissionModule.PermModuleName to ReactModuleInfo(
                    PermissionModule.PermModuleName,
                    PermissionModule.PermModuleName,
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