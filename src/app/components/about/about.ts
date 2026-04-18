import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.html',
    styleUrl: './about.css',
})
export class About {
    summary = 'Results-driven .NET Developer with 3 years of experience in developing, designing and maintaining web applications using .NET Core, C#, ADO.NET, Entity Framework, SQL Server, and ASP.NET MVC. Expert in implementing N-Tier Architecture and Repository Pattern to build scalable code. Skilled in REST API development, authentication & authorization, and implementing Clean Architecture. Passionate about writing clean, efficient, and scalable code.';
}
