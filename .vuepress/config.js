module.exports = {
  title: "XMod Pro Documentation",
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    sidebar: [
      "/",
      "/activating",
      "/getting-started",
      "/control-panel",
      "/manage-forms",
      "/form-builder",
      "/manage-templates",
      "/manage-feeds",
      "/database-tools",
      "/inline-editor",
      "/snippets",
      "/using-javascript",
      "/configuring-xmod-pro",
      "/localization",
      "/faq",
      "/revision-history",
      "/eula",
      "/data-types",
      "/unit-types",
      {
        title: "Tutorials",
        collapsible: true,
        children: [
          "/tutorials/1_listing-users",
          "/tutorials/2_user-detail-view",
          "/tutorials/3_feedback-form",
          "/tutorials/4_saving-feedback-form-data",
          "/tutorials/5_displaying-feedback-form-data",
          "/tutorials/6_editing-deleting-feedback-form-data",
          "/tutorials/7_templates-with-multiple-views"
        ]
      },
      {
        title: "Form Controls",
        collapsible: true,
        children: [
          "/form-controls/action",
          "/form-controls/add-button",
          "/form-controls/add-edit-form",
          "/form-controls/add-image",
          "/form-controls/add-link",
          "/form-controls/add-to-roles",
          "/form-controls/add-user",
          "/form-controls/ajax-button",
          "/form-controls/ajax-image",
          "/form-controls/ajax-link",
          "/form-controls/calendar-button",
          "/form-controls/calendar-image",
          "/form-controls/calendar-link",
          "/form-controls/cancel-button",
          "/form-controls/cancel-image",
          "/form-controls/cancel-link",
          "/form-controls/captcha",
          "/form-controls/checkbox",
          "/form-controls/checkbox-list",
          "/form-controls/continue-button",
          "/form-controls/continue-image",
          "/form-controls/continue-link",
          "/form-controls/control-datasource",
          "/form-controls/date-input",
          "/form-controls/dropdown-list",
          "/form-controls/dual-list",
          "/form-controls/email",
          "/form-controls/file-upload",
          "/form-controls/html-input",
          "/form-controls/include",
          "/form-controls/jquery-ready",
          "/form-controls/label",
          "/form-controls/listbox",
          "/form-controls/login",
          "/form-controls/panel",
          "/form-controls/password",
          "/form-controls/radio-button",
          "/form-controls/radio-button-list",
          "/form-controls/redirect",
          "/form-controls/register",
          "/form-controls/remove-from-roles",
          "/form-controls/script-block",
          "/form-controls/silent-post",
          "/form-controls/tabstrip",
          "/form-controls/text",
          "/form-controls/textarea",
          "/form-controls/textbox",
          "/form-controls/update-button",
          "/form-controls/update-image",
          "/form-controls/update-link",
          "/form-controls/update-user",
          "/form-controls/validate-action",
          "/form-controls/validate-checkbox",
          "/form-controls/validate-checkbox-list",
          "/form-controls/validate-database",
          "/form-controls/validate-compare",
          "/form-controls/validate-email",
          "/form-controls/validate-range",
          "/form-controls/validate-regular-expression",
          "/form-controls/validate-required",
          "/form-controls/validate-xml",
          "/form-controls/validation-summary"
        ]
      },
      {
        title: "Template Controls",
        collapsible: true,
        children: [
          "/template-controls/add-button",
          "/template-controls/add-image",
          "/template-controls/add-link",
          "/template-controls/ajax-button",
          "/template-controls/ajax-image",
          "/template-controls/ajax-link",
          "/template-controls/command-button",
          "/template-controls/command-image",
          "/template-controls/command-link",
          "/template-controls/data-list",
          "/template-controls/delete-button",
          "/template-controls/delete-image",
          "/template-controls/delete-link",
          "/template-controls/detail-button",
          "/template-controls/detail-image",
          "/template-controls/detail-link",
          "/template-controls/each",
          "/template-controls/edit-button",
          "/template-controls/edit-image",
          "/template-controls/edit-link",
          "/template-controls/feed",
          "/template-controls/format",
          "/template-controls/if-empty",
          "/template-controls/if-not-empty",
          "/template-controls/include",
          "/template-controls/jquery-ready",
          "/template-controls/json-feed",
          "/template-controls/load-feed-button",
          "/template-controls/load-feed-image",
          "/template-controls/load-feed-link",
          "/template-controls/load-feed",
          "/template-controls/meta-tags",
          "/template-controls/navigate-url",
          "/template-controls/pager",
          "/template-controls/redirect",
          "/template-controls/register",
          "/template-controls/return-button",
          "/template-controls/return-image",
          "/template-controls/return-link",
          "/template-controls/script-block",
          "/template-controls/search-sort",
          "/template-controls/select",
          "/template-controls/slideshow",
          "/template-controls/template",
          "/template-controls/toggle-button",
          "/template-controls/toggle-image",
          "/template-controls/toggle-link"
        ]
      },
      {
        title: "Tokens",
        collapsible: true,
        children: [
          "/tokens/data",
          "/tokens/dateadd",
          "/tokens/field",
          "/tokens/functions",
          "/tokens/module",
          "/tokens/page",
          "/tokens/portal",
          "/tokens/request",
          "/tokens/user"
        ]
      }
    ]
  }
};