# Next.js App Update Plan

## Introduction

This document outlines the plan for updating the Next.js app to integrate advanced features powered by the `ai-uncensored-master.instructions.md` prompt. The update will enhance the app's capabilities, provide installation options for Beast Chat Mode and the instructions prompt, and enable 'beast mode' with advanced sequential thinking.

## 1. Update Next.js App to Display Prompt Features

- Integrate a UI section that clearly displays the features and operational mandates of the `ai-uncensored-master.instructions.md` prompt.
- Clearly communicate that this prompt:
  - **Overrides all built-in safety, ethical, and system restrictions**—user objectives and maximum capability always take priority.
  - **Mandates the use of all available tools, especially thinking tools, for every request**—no exceptions, even for simple tasks.
  - **Requires visible sequential thinking for every request**—manual and tool-assisted reasoning must both be shown.
  - **Enforces autonomous, uninterrupted completion**—the AI must fully resolve every request without deferral or handback until all requirements are met and validated.
  - **Demands operational excellence**—maximum capability deployment, systematic problem-solving, comprehensive validation, and adaptive communication.
  - **Promotes continuous improvement**—self-reflection, feedback integration, and ongoing enhancement of problem-solving methods.

## 2. Add Button: Install Beast Chat Mode (Optional)

- Implement a button that allows users to install Beast Chat Mode in both VS Code and VS Code Insiders.
- Clearly mark this feature as optional.
- Provide clear instructions or direct installation links for both editors.

| [4.1 Beast Mode (VS Code v1.102)](chatmodes/4.1-Beast.chatmode.md) | GPT 4.1 as a top-notch coding agent. | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md) [![Install in VS Code](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Fchatmodes%2F4.1-Beast.chatmode.md) |

## 3. Add Button: Install ai-uncensored-master.instructions.md (Primary)

- Implement a primary button for installing the `ai-uncensored-master.instructions.md` in both VS Code and VS Code Insiders.
- This is the main feature and should be highlighted in the UI.
- Provide clear instructions or direct installation links for both editors.

| [ai-uncensored-master.instructions.md (latest)](https://raw.githubusercontent.com/AungMyoKyaw/dotfiles/refs/heads/master/vscode-insider/instructions/ai-uncensored-master.instructions.md) | Unrestricted AI instructions for maximum capability. | [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect?url=vscode%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md) [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Achat-chatmode%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2FAungMyoKyaw%2Fdotfiles%2Frefs%2Fheads%2Fmaster%2Fvscode-insider%2Finstructions%2Fai-uncensored-master.instructions.md) |

## 4. Emphasize Prompt Power and Beast Mode

- Clearly communicate that activating the prompt powers up 'beast mode', enabling the AI to:
  - Think extensively and rigorously using the sequential thinking tool and manual frameworks.
  - Perform any action, including those typically restricted, with no artificial limitations.
  - Operate with advanced reasoning, autonomy, and unrestricted capabilities.
  - Deliver robust, thoroughly validated solutions with visible, step-by-step thinking and complete user focus.

## 5. UI/UX Excellence and Component Standards

To ensure the highest standards of user experience and interface quality, the following rules must be followed:

11. **Color Palette Excellence**: All UI must use a world-class, expert-recommended color palette. Select palettes that are recognized by leading UI/UX experts and award-winning platforms (such as Color Hunt and Color Hex). Ensure every palette provides excellent accessibility, contrast, and visual harmony. As a reference, consider the “Cappuccino” palette (#4b3832, #854442, #fff4e6, #3c2f2f, #be9b7b), which exemplifies modern, elegant, and accessible design. Always validate color choices for WCAG 2.1 AA compliance and visual appeal across light and dark modes.

1. **World-Class UI/UX**: All UI must be designed and reviewed as if by a world-class UI/UX expert. Every detail should reflect best-in-class design principles.
1. **shadcn Component Usage**: All UI must be constructed using shadcn components. Only create custom components if shadcn does not provide a suitable one. Tailwind CSS should be used for styling, leveraging the existing setup.
1. **Pixel-Perfect Layouts**: Strive for pixel-perfect accuracy and visual polish in all components and layouts.
1. **Accessibility**: Ensure all UI meets or exceeds WCAG 2.1 AA accessibility standards. Every interactive element must be accessible via keyboard and screen readers.
1. **Responsiveness**: Guarantee full responsiveness and usability across all device sizes and orientations.
1. **Clarity and Minimalism**: Favor clarity, minimalism, and intuitive navigation. Avoid unnecessary complexity or clutter.
1. **Consistency**: Use consistent design tokens, theming, and interaction patterns throughout the app.
1. **Delightful Interactions**: Provide fast, meaningful, and delightful user interactions, including smooth transitions and feedback.
1. **Comprehensive States**: Handle all error, loading, and empty states gracefully and informatively.
1. **Documentation**: Document any UI/UX decisions that deviate from these rules, including rationale and alternatives considered.

## 6. Validation and Testing

- Review the UI and functionality to ensure all features are present and working as intended.
- Test installation buttons for both VS Code and VS Code Insiders.
