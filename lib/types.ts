export enum HookCategory {
  SECURITY = "security",
  PRODUCTIVITY = "productivity",
  MONITORING = "monitoring",
  INTEGRATION = "integration",
  DEVELOPMENT = "development",
  NOTIFICATION = "notification",
  UTILITY = "utility"
}

export enum HookType {
  USER_PROMPT_SUBMIT = "UserPromptSubmit",
  PRE_TOOL_USE = "PreToolUse",
  POST_TOOL_USE = "PostToolUse",
  NOTIFICATION = "Notification",
  STOP = "Stop",
  SUBAGENT_STOP = "SubagentStop",
  PRE_COMPACT = "PreCompact",
  SESSION_START = "SessionStart"
}

export enum ProgrammingLanguage {
  PYTHON = "python",
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
  BASH = "bash",
  PHP = "php"
}

export interface Hook {
  id: string;
  name: string;
  slug: string;
  category: HookCategory;
  description: string;
  longDescription?: string;
  repositoryUrl: string;
  author: string;
  stars?: number;
  hookTypes: HookType[];
  tags: string[];
  language: ProgrammingLanguage;
  createdAt: Date;
  updatedAt: Date;
  featured: boolean;
}

export const categoryColors: Record<HookCategory, string> = {
  [HookCategory.SECURITY]: "bg-red-100 text-red-800 border-red-200",
  [HookCategory.PRODUCTIVITY]: "bg-green-100 text-green-800 border-green-200",
  [HookCategory.MONITORING]: "bg-blue-100 text-blue-800 border-blue-200",
  [HookCategory.INTEGRATION]: "bg-purple-100 text-purple-800 border-purple-200",
  [HookCategory.DEVELOPMENT]: "bg-yellow-100 text-yellow-800 border-yellow-200",
  [HookCategory.NOTIFICATION]: "bg-indigo-100 text-indigo-800 border-indigo-200",
  [HookCategory.UTILITY]: "bg-gray-100 text-gray-800 border-gray-200"
};

export const languageIcons: Record<ProgrammingLanguage, string> = {
  [ProgrammingLanguage.PYTHON]: "🐍",
  [ProgrammingLanguage.TYPESCRIPT]: "📘",
  [ProgrammingLanguage.JAVASCRIPT]: "📙",
  [ProgrammingLanguage.BASH]: "🖥️",
  [ProgrammingLanguage.PHP]: "🐘"
};