---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'Interface: TopbarApi'
---

# Interface: TopbarApi

Defines page-level APIs available to solutions.

## Hierarchy

* [TopbarApiProperties](topbar.topbarapiproperties.md)
  
  ↳ **TopbarApi**

## Properties

### customEnvLabel

• **customEnvLabel**: *string*

*Inherited from [TopbarApiProperties](topbar.topbarapiproperties.md).[customEnvLabel](topbar.topbarapiproperties.md#customenvlabel)*

Gets or sets a custom environment label in the shell.

***Example:***

```typescript
topbar.customEnvLabel = 'Beta';
```

___

### solution

• **solution**: *[Solution](topbar.solution.md)*

*Inherited from [TopbarApiProperties](topbar.topbarapiproperties.md).[solution](topbar.topbarapiproperties.md#solution)*

Configuration for solution name and hero.

***Example:***

```typescript
topbar.solution = {
  icon: 'AdobeExperienceCloud',
  title: 'Adobe Experience Cloud22',
  shortTitle: 'AEC'
};
```

___

### workspaces

• **workspaces**: *WorkspaceMenu[]*

*Inherited from [TopbarApiProperties](topbar.topbarapiproperties.md).[workspaces](topbar.topbarapiproperties.md#workspaces)*

Configuration for the Shell workspaces. Workspace names should be unique, and localized using the unified-shell locale prior to setting runtime.workspaces.

```typescript
topbar.workspaces = [
  {name: 'Home', url: '/'},
  {name: 'ABC', url: '/abc'},
  {name: 'DEF', url: '/def'}
];
```

Unified shell also supports workspace flyout menus, where clicking on a workspace displays a dropdown menu. The top-level workspace is present in the dropdown menu as the first menu item. Menus may be nested multiple times, and used in combination with normal workspaces. By default, parent menu items will be automatically added to the sub-menu because of the way the user interaction works. To prevent this, remove the url property on the parent item; it will then not be injected into the sub-menu.

```typescript
topbar.workspaces = [
  {name: 'Home', url: '/'},
  {name: 'ABC', url: '/abc'},
  {
    name: 'DEF',
    url: '/def',
    menu: [
      {
        name: 'GHI',
        url: '/def/ghi',
        menu: [
          {name: 'JKL', url: '/def/ghi/jkl'}
        ]
      }
    ]
  }
];
```

## Methods

### onHeroClick

▸ **onHeroClick**(`callback`: [Callback](topbar.callback.md)): *void*

Registers a callback to execute when the hero (solution) icon in the upper lefthand corner of the Shell is clicked.

**Parameters:**

| Name       | Type                           | Description              |
| ---------- | ------------------------------ | ------------------------ |
| `callback` | [Callback](topbar.callback.md) | The callback to execute. |

**Returns:** *void*

___

### setCustomSearch

▸ **setCustomSearch**(`config`: [CustomSearchConfig](topbar.customsearchconfig.md) | null): *void*

Determines whether or not to enable the custom search property, and enacts a callback when the custom search icon is clicked.

**Parameters:**

| Name     | Type                                                           |
| -------- | -------------------------------------------------------------- |
| `config` | [CustomSearchConfig](topbar.customsearchconfig.md) &#124; null |

**Returns:** *void*

___

### setFeedbackButton

▸ **setFeedbackButton**(`config`: [CustomFeedbackConfig](topbar.customfeedbackconfig.md) | [HelpCenterFeedbackConfig](topbar.helpcenterfeedbackconfig.md) | [ExternalFeedbackConfig](topbar.externalfeedbackconfig.md) | null): *void*

Determines whether or not to enable a feedback button.

**Parameters:**

| Name     | Type                                                                                                                                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `config` | [CustomFeedbackConfig](topbar.customfeedbackconfig.md) &#124; [HelpCenterFeedbackConfig](topbar.helpcenterfeedbackconfig.md) &#124; [ExternalFeedbackConfig](topbar.externalfeedbackconfig.md) &#124; null |

**Returns:** *void*

## Next steps

Explore details of the [Index](./modules/index.md), [Page](./modules/page.md), [TopBar](./modules/topbar.md), and [User](./modules/user.md) external modules.

Explore the attributes and behavior of other Adobe Experience Cloud interfaces:

[Modules](modules.md)

[Runtime](runtime.md)

| Page                                             | Topbar                                                     | User                          |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------------------------- |
| [Object with Href](page.objectwithhref.md)       | [Callback](topbar.callback)                                | [User API](user.userapi.md)   |
| [Object with Path](pageobjectwithpath.md)        | [Custom Feedback](topbar.customfeedback.md)                | [User Info](user.userinfo.md) |
| [Page API](page.pageapi.md)                      | [Custom Search](topbar.customsearchconfig.md)              |                               |
| [Page API Properties](page.pageapiproperties.md) | [Help Center Feedback](topbar.helpcenterfeedbackconfig.md) |                               |
|                                                  | [External Feedback](topbar.externalfeedbackconfig.md)      |                               |
|                                                  | [Solution](topbar.solution.md)                             |                               |
|                                                  | [Topbar API Properties](topbar.topbarapiproperties.md)     |                               |

Return to the [Guides Index](../../guides_index.md).