document.addEventListener('DOMContentLoaded', function() {
    // 应用下载链接配置
    const appLinks = {
        android: 'https://play.google.com/store/apps/details?id=tech.buddhistprayer.app', // 替换为实际的 Google Play 链接
        ios: 'https://apps.apple.com/cy/app/buddhist-prayer-eprayer/id6745424224' // 替换为实际的 App Store 链接
    };

    // 获取 DOM 元素
    const downloadMessage = document.getElementById('download-message');
    const androidDownloadBtn = document.getElementById('android-download');
    const iosDownloadBtn = document.getElementById('ios-download');
    const downloadButtons = document.querySelector('.download-buttons');

    // 设置下载按钮链接
    androidDownloadBtn.href = appLinks.android;
    iosDownloadBtn.href = appLinks.ios;
    
    // 检查是否是移动设备
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // 如果是移动设备，添加额外的样式类
    if (isMobile) {
        downloadButtons.classList.add('mobile-fixed');
    }

    // 检测设备类型
    function detectDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // 检测 iOS 设备
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            downloadMessage.textContent = 'We detected you are using an iOS device';
            redirectToStore('ios');
            return 'ios';
        }
        
        // 检测 Android 设备
        if (/android/i.test(userAgent)) {
            downloadMessage.textContent = 'We detected you are using an Android device';
            redirectToStore('android');
            return 'android';
        }
        
        // 未能识别设备类型
        downloadMessage.textContent = 'Please select your device type to download';
        return 'unknown';
    }

    // 重定向到应用商店
    function redirectToStore(platform) {
        // 设置短暂延迟，让用户看到检测信息
        setTimeout(() => {
            if (platform === 'android') {
                window.location.href = appLinks.android;
            } else if (platform === 'ios') {
                window.location.href = appLinks.ios;
            }
        }, 1500);
    }

    // 执行设备检测
    const deviceType = detectDevice();
    
    // 始终显示两个下载按钮，但突出显示检测到的设备类型对应的按钮
    androidDownloadBtn.style.display = 'flex';
    iosDownloadBtn.style.display = 'flex';
    
    if (deviceType === 'android') {
        // 如果是 Android 设备，突出显示 Android 下载按钮
        androidDownloadBtn.classList.add('highlighted');
    } else if (deviceType === 'ios') {
        // 如果是 iOS 设备，突出显示 iOS 下载按钮
        iosDownloadBtn.classList.add('highlighted');
    }
});