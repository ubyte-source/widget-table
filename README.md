# Documentation widget-table

Widget Javascript Table is a library used to create table in a web page.

## Usage

So the basic setup to build a table is the following:

```

let table = new Table();

table.getThead().addRow(
    Table.Tr.Th.content('key'),
    Table.Tr.Th.content('value'),
    Table.Tr.Th.content('description')
);

for (let item = 0; item < 100; item++)
  table.getTbody().addRow(
      Table.Tr.Td.content('key for item' + String.fromCharCode(32) + item),
      Table.Tr.Td.content('value for item' + String.fromCharCode(32) + item),
      Table.Tr.Td.content('description for item' + String.fromCharCode(32) + item)
  );

document.appendChild(table);

```

## Structure

library:
- [window.Table](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Colgroup](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Colgroup.Col](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Thead](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Tbody](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Tfoot](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Tr](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Tr.Td](https://github.com/energia-source/widget-table/tree/main/lib)
- [window.Table.Tr.Th](https://github.com/energia-source/widget-table/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-table/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-table/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details