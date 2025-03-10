import { useEffect } from "react";

const HostedPortal = () => {
  useEffect(() => {
    // var script = document.createElement("script");
    const script = document.createElement("script");
    script.src = "https://dxjs.apimatic.io/v7/static/js/portal.v7.js";
    // script.async = true;

    script.onload = () => {
      if (window.APIMaticDevPortal) {
        window.APIMaticDevPortal.show({
          container: "apimatic-widget",
          portalStyle: "default",
          codegenApiRoutes: {
            docsgen:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXkGeLMzlD8qlNXJZ6xQ7LlqzPhCIja_mdsye7VqOfdW6/portal-artifacts/docs/generated-file?template={template}",
            codegen:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXkGeLMzlD8qlNXJZ6xQ7LlqzPhCIja_mdsye7VqOfdW6/portal-artifacts/sdks/generated-file?template={template}",
            transform:
              "/api/api-entities/9VorLaJ1ah9dhT3QFGcKXkGeLMzlD8qlNXJZ6xQ7LlqzPhCIja_mdsye7VqOfdW6/portal-artifacts/specs/generated-file?format={format}",
            apiProxy: "https://proxy.apimatic.io/api/proxy",
          },
          apiKey:
            "PkUYNyvjYA7DfFBwoKTjTMYJQDSxd-7CMurTSC277SQiUAWJjJEhcqLSyvmTvzd68ptb_R4CqYbK-3aQaajLXw**",
          baseUrl: "https://www.apimatic.io",
          enableExport: true,
          renameHttpToRest: false,
          enableConsoleCalls: true,
          useProxyForConsoleCalls: true,
          initialPlatform: "http_curl_v1",
          theme: {
            // Choose the base theme
            baseTheme: "standard", // "standard" & "cosmos"

            // Color variables
            colors: {
              primaryColor: {
                light: "#0C7FF2", // Changed the color of "Introduction in the RSB"
                dark: "#7CBAF8",
              },
              linkColor: {
                light: "#004AD7",
                dark: "#66B2FF",
              },
            },

            // Color mode settings
            colorMode: {
              defaultMode: "light", // Changed the bg of app to dark and text to white
              disableSwitch: true, // Implementation should be inverted
            },
            fontSource: [
              // Using this font in heading and body text
              "https://fonts.googleapis.com/css?family=Rubik:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
              // Using this font in inline and block code samples
              "https://fonts.googleapis.com/css?family=Courier+Prime:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
            ],
            cssStyles: {
              // Customize the typography for different heading levels
              headings: {
                fontFamily: '"Rubik", sans-serif', // Add your font-family name here
                h1: {
                  fontFamily: '"Rubik", sans-serif', // Add your font-family name here
                  fontSize: "28.83px", // Add your font size of heading level 1 according to your style guide.
                  fontWeight: "500", // Add your font weight of heading level 1 according to your style guide.
                  fontStyle: "normal", // Add your font style of heading level 1 according to your style guide.
                  lineHeight: "1.3", // Add your line height of heading level 1 according to your style guide.
                  textTransform: "capitalize",
                },
                h2: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "25.63px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "1.3",
                  textTransform: "capitalize",
                },
                h3: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "22.78px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "1.3",
                  textTransform: "capitalize",
                },
                h4: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "18px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "1.3",
                  textTransform: "capitalize",
                },
                h5: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "16px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "1.3",
                  textTransform: "capitalize",
                },
                h6: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "14.22px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  lineHeight: "1.3",
                  textTransform: "capitalize",
                },
              },
              // Customize the typography for different bode text level
              body: {
                fontFamily: '"Rubik", sans-serif', // Add your font-family name here
                // Refers to the paragraph text.
                text1: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "15px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "1.75",
                  textTransform: "none",
                },
                text2: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "13.33px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "1.75",
                  textTransform: "none",
                },
                text3: {
                  fontFamily: '"Rubik", sans-serif',
                  fontSize: "11.85px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "1.75",
                  textTransform: "none",
                },
              },
              // Customize the typography for different code samples.
              code: {
                fontFamily: "Courier Prime, monospace",
                // Method Signature code block, Code Samples on right side, Example response code block.
                blockCode: {
                  fontFamily: "Courier Prime, monospace",
                  fontSize: "14.22px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "1.75",
                },
                inlineCode: {
                  fontFamily: "Courier Prime, monospace",
                  fontSize: "14.22px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  lineHeight: "1.75",
                },
              },
            },
          },
          languageSettings: {
            http_curl_v1: {
              disableSdkDownload: true,
            },
            cs_net_standard_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            java_eclipse_jre_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            php_generic_lib_v2: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            python_generic_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            ruby_generic_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            ts_generic_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
            go_generic_lib: {
              disableSdkDownload: false,
              sdkDownloadLink: "",
            },
          },
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
