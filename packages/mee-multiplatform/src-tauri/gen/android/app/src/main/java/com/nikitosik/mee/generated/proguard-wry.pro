# THIS FILE IS AUTO-GENERATED. DO NOT MODIFY!!

# Copyright 2020-2023 Tauri Programme within The Commons Conservancy
# SPDX-License-Identifier: Apache-2.0
# SPDX-License-Identifier: MIT

-keep class com.nikitosik.mee.* {
  native <methods>;
}

-keep class com.nikitosik.mee.WryActivity {
  public <init>(...);

  void setWebView(com.nikitosik.mee.RustWebView);
  java.lang.Class getAppClass(...);
  java.lang.String getVersion();
}

-keep class com.nikitosik.mee.Ipc {
  public <init>(...);

  @android.webkit.JavascriptInterface public <methods>;
}

-keep class com.nikitosik.mee.RustWebView {
  public <init>(...);

  void loadUrlMainThread(...);
  void loadHTMLMainThread(...);
  void setAutoPlay(...);
  void setUserAgent(...);
  void evalScript(...);
}

-keep class com.nikitosik.mee.RustWebChromeClient,com.nikitosik.mee.RustWebViewClient {
  public <init>(...);
}