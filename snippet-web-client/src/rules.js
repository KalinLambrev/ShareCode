const rules = {
    member: {
        static: ["snippets:list", "snippets:create", "snippets:like"]
    },
    admin: {
        static: [
            "snippets:list",
            "snippets:delete",
            "snippets:get"
        ]
    },
    incognito: {
        static: [
            "snippets:list"
        ],
    },
};

export default rules;