import { useEffect } from "react";

const HostedPortal = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://dxjs.apimatic.io/v7/static/js/portal.v7.js";
    script.async = true;

    script.onload = () => {
      if (window.APIMaticDevPortal) {
        window.APIMaticDevPortal.show({
          container: "apimatic-widget",
          portalStyle: "default",
          codegenApiRoutes: {
            docsgen:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXjN1LQRWcHbZXh8nZe-uqX38rglhlGfbggmr8w035XW_/portal-artifacts/docs/generated-file?template={template}",
            codegen:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXjN1LQRWcHbZXh8nZe-uqX38rglhlGfbggmr8w035XW_/portal-artifacts/sdks/generated-file?template={template}",
            transform:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXjN1LQRWcHbZXh8nZe-uqX38rglhlGfbggmr8w035XW_/portal-artifacts/specs/generated-file?format={format}",
            apiProxy: "https://proxy.apimatic.io/api/proxy",
          },
          apiKey:
            "PkUYNyvjYA7DfFBwoKTjTDf2N0L3Qx6ypX88wCPcVy3y2cBRx7ZaJj7XeKb6dyAAE7ZDbDjqBw4ne9HWUbFKpA**",
          baseUrl: "https://www.apimatic.io",
          enableExport: true,
          renameHttpToRest: false,
          enableConsoleCalls: true,
          useProxyForConsoleCalls: true,
          initialPlatform: "http_curl_v1",
          allowedExportFormats: [
            "postman10",
            "postman20",
            "openapi31json",
            "openapi31yaml",
            "openapi3json",
            "openapi3yaml",
            "swagger20",
            "swaggeryaml",
            "swagger10",
            "raml",
            "raml10",
            "apiblueprint",
            "wadl2009",
            "apimatic",
            "wsdl",
            "insomnia",
            "insomniayaml",
          ],
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="apimatic-widget" style={{ height: "100%", width: "100%" }} />;
};

export default HostedPortal;
