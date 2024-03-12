package com.awesomeproject

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class PermissionModule(r1:ReactApplicationContext): ReactContextBaseJavaModule(r1) {
    override fun getName(): String {
       return  PermModuleName
    }
   companion object  {
        const val PermModuleName = "PermModuleName"
    }
}