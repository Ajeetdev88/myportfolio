import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.html',
    styleUrl: './skills.css',
})
export class Skills {
    skillCategories = [
        {
            name: 'Frontend & UI',
            skills: ['HTML5', 'Bootstrap', 'JavaScript', 'jQuery', 'Angular', 'Ajax']
        },
        {
            name: 'Backend & Frameworks',
            skills: ['Asp.Net MVC', 'Asp.Net Core (5, 6, 7, 8, .NET 9)', 'Web API', 'JWT & Identity', 'Clean Architecture', 'Repository Pattern']
        },
        {
            name: 'Programming Languages',
            skills: ['C#', 'C', 'TypeScript', 'JavaScript']
        },
        {
            name: 'Databases',
            skills: ['Microsoft SQL Server', 'PostgreSQL']
        },
        {
            name: 'Tools & IDE',
            skills: ['Visual Studio 2022', 'VS Code', 'SSMS', 'PgAdmin', 'GitHub Desktop', 'Docker Desktop', 'Filezilla', 'Postman']
        }
    ];
}
