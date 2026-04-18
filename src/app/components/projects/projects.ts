import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
})
export class Projects {
    projectsList = [
        {
            name: 'HEMS',
            link: 'https://hems.sileoindia.com',
            type: 'Professional Project',
            description: 'A Higher Education Management System (HEMS) is a comprehensive software suite designed to digitize and automate the entire lifecycle of a student, from recruitment to graduation, while managing the administrative and academic operations of a university or college.',
            technologies: ['.NET Core', 'Angular', 'SQL Server', 'N-Tier Architecture']
        },
        {
            name: 'SchoolERP',
            link: 'https://school.sileoindia.com',
            type: 'Professional Project',
            description: 'A comprehensive ERP solution designed for school administration, student management, and academic management systems.',
            technologies: ['.NET Core', 'Angular', 'SQL Server', 'Web API']
        },
        {
            name: 'Phlebo (Mobile App & Admin Panel)',
            link: 'https://phelbo.sileoindia.com',
            type: 'Professional Project',
            description: 'A Phlebo App (Phlebotomist App) is a mobile tool and admin panel designed for healthcare workers (phlebotomists) who visit a patient\'s home or office to collect diagnostic samples.',
            technologies: ['.NET Core', 'Web API', 'SQL Server', 'Mobile Integration']
        },
        {
            name: 'Propmatrix',
            type: 'Professional Project',
            description: 'The Propmatrix project is a specialized Real Estate CRM (Customer Relationship Management) and business management software designed primarily for real estate developers, brokers, and property managers in India.',
            technologies: ['.NET Core', 'SQL Server', 'CRM Architecture']
        },
        {
            name: 'E-LEARNING PORTAL',
            type: 'Self Project',
            description: 'An online learning platform offering courses, training programs, and certifications in various fields, including technology.',
            technologies: [
                'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap',
                'ASP.NET MVC CORE 8', 'MS-SQL SERVER', 'Stripe', 'Razor Pay',
                'Email Integration', 'N-Tier Architecture', 'Repository Pattern',
                'Web API', 'JWT Authentication'
            ]
        }
    ];
}
