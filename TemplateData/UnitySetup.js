function unityShowBanner(msg, type) {
        
    }
    
    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/v6.loader.js";
    var config = {
        dataUrl: buildUrl + "/v6.data",
        frameworkUrl: buildUrl + "/v6.framework.js",
        codeUrl: buildUrl + "/v6.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "MiniGames",
        productVersion: "0.1",
        showBanner: unityShowBanner,
    };

    createUnityInstance(canvas, config, (progress) => {
    })
        .then((unityInstance) => {
            gameInstance = unityInstance;
        })
        .catch((message) => {
            alert(message);
        });
