import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.html',
    styleUrl: './experience.css',
})
export class Experience {
    experiences = [
        {
            company: 'Sileo Technologies Pvt Ltd',
            role: 'Full Stack Dot Net Developer',
            duration: '20/11/2024 - 30/05/2026',
            description: 'Designed, developed, and deployed scalable and high performance applications using .NET Core, Angular and SQL Server and PostgreSQL. Built and optimized RESTful APIs, improving data retrieval efficiency and reducing API response time. Implemented authentication and role-based authorization using JWT & Identity for secure access control and dynamic role permission wise menu.'
        },
        {
            company: 'G-TECH WEB SOLUTIONS PVT LTD, KOLKATA',
            role: 'Dot Net Developer',
            duration: '20/09/2023 - 25/10/2024',
            description: 'Worked on many existing projects such as small micro finance bank services software. Developed technical solutions using Asp.Net MVC and focused on backend logic and database management.'
        },
        {
            company: 'Techpile Technology Pvt Ltd, Lucknow',
            role: 'Dot Net Developer Internship',
            duration: '01/01/2023 - 01/07/2023',
            description: 'Worked as an internship trainee, gaining hands-on experience in .NET development and full-stack implementation.'
        },
        {
            company: 'Softpro India Private Limited, Lucknow',
            role: 'Summer Trainee (Java & Android)',
            duration: '01/07/2022 - 01/09/2022',
            description: 'Summer training covering Java and Android development, focusing on core programming concepts and mobile UI design.'
        }
    ];

    education = [
        {
            institution: 'Government Polytechnic Jaunpur',
            degree: 'Diploma in Computer Science & Engineering',
            year: '2022 - 2023'
        },
        {
            institution: 'Shri SitaRam Inter College, Ranveerpur Mau',
            degree: 'Intermediate',
            year: '2018'
        },
        {
            institution: 'Mata Tapeswari Inter College, Mardah Ghazipur',
            degree: 'High School',
            year: '2016'
        }
    ];
}
