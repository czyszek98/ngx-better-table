// ...

@Component({
template: `    <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
    <ngx-better-table [settings]="settings" [source]="source"></ngx-better-table>
 `
})
// ...
