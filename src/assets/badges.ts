
export enum Tool {
    CSharp = "C#",
    TypeScript = "TypeScript",
    JavaScript = "JavaScript",
    React = "React",
    Azure = "Azure",
    Docker = "Docker",
    SqlServer = "SQLServer",
    Octopus = "Octopus",
    TeamCity = "TeamCity",
    JQuery = "JQuery",
    CPlusPlus = "C++",
    Unity = "Unity",
    Dotnet = ".NET",
    MySql = "MySQL",
    Java = "Java",
    Python = "Python",
    C = "C"
}

export interface LanguageBadge {
    name: string;
    link: string
}

export const LanguageBadges: Record<Tool, LanguageBadge> = {
    [Tool.CSharp]: {
        name: Tool.CSharp,
        link: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
    },
    [Tool.JavaScript]: {
        name: Tool.JavaScript,
        link: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    [Tool.TypeScript]: {
        name: Tool.TypeScript,
        link: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    [Tool.React]: {
        name: Tool.React,
        link: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    [Tool.Azure]: {
        name: Tool.Azure,
        link: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    },
    [Tool.Docker]: {
        name: Tool.Docker,
        link: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
    },
    [Tool.SqlServer]: {
        name: Tool.SqlServer,
        link: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
    },
    [Tool.Octopus]: {
        name: Tool.Octopus,
        link: "https://img.shields.io/badge/octopus%20deploy-0D80D8?style=for-the-badge&logo=octopusdeploy&logoColor=white"
    },
    [Tool.TeamCity]: {
        name: Tool.TeamCity,
        link: "https://img.shields.io/badge/teamcity-000000.svg?style=for-the-badge&logo=teamcity&logoColor=white"
    },
    [Tool.JQuery]: {
        name: Tool.JQuery,
        link: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
    },
    [Tool.CPlusPlus]: {
        name: Tool.CPlusPlus,
        link: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
    },
    [Tool.Unity]: {
        name: Tool.Unity,
        link: "https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white"
    },
    [Tool.Dotnet]: {
        name: Tool.Dotnet,
        link: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
    },
    [Tool.MySql]: {
        name: Tool.MySql,
        link: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
    },

    [Tool.Java]: {
        name: Tool.Java,
        link: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
    },
    [Tool.Python]: {
        name: Tool.Python,
        link: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
    },
    [Tool.C]: {
        name: Tool.C,
        link: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
    },

}
