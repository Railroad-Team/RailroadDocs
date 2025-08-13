import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Railroad Docs",
    description: "Documentation for the Railroad IDE",
    locales: { // IMPORTANT : L10n is not yet implemented
        root: {
            label: 'English',
            lang: 'en'
        }
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        i18nRouting: false,
        editLink: {
            pattern: 'https://github.com/Railroad-Team/RailroadDocs/edit/main/src/:path'
        },
        logo: "/railroad.png",
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Tutorials', link: '/tutorials/getting-started'},
            {text: 'Development', link: '/development/building-and-running'},
            {text: 'Plugins', link: '/plugins/'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'Tutorials',
                items: [
                    {text: 'Getting Started', link: '/tutorials/getting-started'},
                    {text: 'Installation', link: '/tutorials/installation'},
                    {text: 'Project Creation', link: '/tutorials/project-creation'}
                ]
            },
            {
                text: 'Development',
                items: [
                    {text: 'Building and Running', link: '/development/building-and-running'}
                ]
            },
            {
                text: 'Plugins',
                items: [
                    {text: 'Introduction', link: '/plugins/'},
                    {
                        text: 'Guide',
                        collapsed: true,
                        items: [
                            {text: 'Getting Started', link: '/plugins/guide/getting-started'},
                            {text: 'Project Setup', link: '/plugins/guide/project-setup'},
                            {text: 'Plugin Class', link: '/plugins/guide/plugin-class'},
                            {text: 'plugin.json Configuration', link: '/plugins/guide/plugin-json'},
                            {text: 'Accessing Services', link: '/plugins/guide/accessing-services'},
                            {text: 'Plugin Structure', link: '/plugins/guide/plugin-structure'},
                            {text: 'Dependencies', link: '/plugins/guide/dependencies'},
                            {text: 'Events', link: '/plugins/guide/events'},
                            {text: 'Working with Projects', link: '/plugins/guide/working-with-projects'},
                            {text: 'Building Plugins', link: '/plugins/guide/building-plugins'}
                        ]
                    },
                    {
                        text: 'API Reference',
                        collapsed: true,
                        items: [
                            {text: 'Introduction', link: '/plugins/api-reference/'},
                            {text: 'Plugin', link: '/plugins/api-reference/plugin'},
                            {text: 'Events', link: '/plugins/api-reference/events'},
                            {text: 'Services', link: '/plugins/api-reference/services'},
                            {text: 'Registries', link: '/plugins/api-reference/registries'},
                            {text: 'Settings', link: '/plugins/api-reference/settings'},
                            {text: 'Localization', link: '/plugins/api-reference/localization'},
                            {text: 'Secure Storage', link: '/plugins/api-reference/secure-storage'},
                            {text: 'Gson Locator', link: '/plugins/api-reference/gson-locator'},
                            {text: 'Logger', link: '/plugins/api-reference/logger.md'},
                            {
                                text: 'UI Components',
                                collapsed: true,
                                link: '/plugins/api-reference/ui/',
                                items: [
                                    {text: 'RRButton', link: '/plugins/api-reference/ui/rr-button'},
                                    {text: 'RRTextField', link: '/plugins/api-reference/ui/rr-text-field'},
                                    {text: 'RRHBox and RRVBox', link: '/plugins/api-reference/ui/rr-hbox-vbox'},
                                    {text: 'RRGridPane', link: '/plugins/api-reference/ui/rr-grid-pane'},
                                    {text: 'RRCard', link: '/plugins/api-reference/ui/rr-card'},
                                    {text: 'RRFormContainer and RRFormSection', link: '/plugins/api-reference/ui/rr-form-container-section'},
                                    {text: 'RRAnchorPane', link: '/plugins/api-reference/ui/rr-anchor-pane'},
                                    {text: 'RRBorderPane', link: '/plugins/api-reference/ui/rr-border-pane'},
                                    {text: 'RRDialogPane', link: '/plugins/api-reference/ui/rr-dialog-pane'},
                                    {text: 'RRFlowPane', link: '/plugins/api-reference/ui/rr-flow-pane'},
                                    {text: 'RRListView', link: '/plugins/api-reference/ui/rr-list-view'},
                                    {text: 'RRNavigationItem', link: '/plugins/api-reference/ui/rr-navigation-item'},
                                    {text: 'RRSidebar', link: '/plugins/api-reference/ui/rr-sidebar'},
                                    {text: 'RRStackPane', link: '/plugins/api-reference/ui/rr-stack-pane'},
                                    {text: 'RRTilePane', link: '/plugins/api-reference/ui/rr-tile-pane'},
                                    {text: 'BrowseButton', link: '/plugins/api-reference/ui/browse-button'},
                                    {text: 'Localized Components', link: '/plugins/api-reference/ui/localized-components'},
                                    {
                                        text: 'Forms', link: '/plugins/api-reference/ui/forms/index.md',
                                        collapsed: true,
                                        items: [
                                            {text: 'FormCheckBox', link: '/plugins/api-reference/ui/forms/form-check-box'},
                                            {text: 'FormComboBox', link: '/plugins/api-reference/ui/forms/form-combo-box'},
                                            {text: 'FormDirectoryChooser', link: '/plugins/api-reference/ui/forms/form-directory-chooser'},
                                            {text: 'FormTextArea', link: '/plugins/api-reference/ui/forms/form-text-area'},
                                            {text: 'FormTextField', link: '/plugins/api-reference/ui/forms/form-text-field'},
                                            {text: 'RRFormContainer', link: '/plugins/api-reference/ui/forms/rr-form-container'},
                                            {text: 'RRFormSection', link: '/plugins/api-reference/ui/forms/rr-form-section'},
                                            {text: 'InformativeLabeledHBox', link: '/plugins/api-reference/ui/forms/informative-labeled-h-box'},
                                            {text: 'Form', link: '/plugins/api-reference/ui/forms/form'},
                                            {text: 'FormComponent', link: '/plugins/api-reference/ui/forms/form-component'},
                                            {text: 'FormData', link: '/plugins/api-reference/ui/forms/form-data'},
                                            {text: 'FormSection', link: '/plugins/api-reference/ui/forms/form-section'}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Railroad-Team/'},
            {icon: 'discord', link: 'https://discord.turtywurty.dev/'}
        ],
    },
    srcDir: 'src',
    markdown: {
        theme: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha"
        }
    }
})
