module.exports = ({ env }) => ({
    "fuzzy-search": {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: "api::doctor.doctor",
                    modelName: "Bác sỹ",
                    transliterate: true,
                    fuzzysortOptions: {
                        characterLimit: 300,
                        threshold: 0.6,
                        limit: 10,
                        keys: [
                            {
                                name: "title",
                                weight: 0.1,
                            },
                            {
                                name: "description",
                                weight: -0.1,
                            },
                        ],
                    },
                },
                {
                    uid: "api::service.service",
                    modelName: "Dịch vụ",
                    fuzzysortOptions: {
                        characterLimit: 500,
                        keys: [
                            {
                                name: "title",
                                weight: 0.2,
                            },
                            {
                                name: "description",
                                weight: -0.2,
                            },
                        ],
                    },
                },
                {
                    uid: "api::post.post",
                    modelName: "Tin tức - Khuyến Mại",
                    fuzzysortOptions: {
                        characterLimit: 500,
                        keys: [
                            {
                                name: "title",
                                weight: 0.2,
                            },
                            {
                                name: "description",
                                weight: -0.2,
                            },
                        ],
                    },
                }
            ],
        },
    },
    'google-sheet-config': {
        enabled: true,
        resolve: './src/plugins/google-sheet-config'
    },
    'siteconfig': {
        enabled: true,
        resolve: './src/plugins/siteconfig'
    },
    menus: {
        config: {
          maxDepth: 1,
        },
    },
});
