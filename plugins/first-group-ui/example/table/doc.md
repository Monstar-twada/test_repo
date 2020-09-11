# fg-table

## Properties

| Props      | Type   | Default                    | Description                                              |
| :--------- | :----- | :------------------------- | :------------------------------------------------------- |
| data       | Array  | `[]`                       | `[{name: '', birthday: '', text: '', ...}, {}, {} ....]` |
| tableClass | string | ``|set table's class       |
| theadClass | string | ``|set table thead's class |
| tbodyClass | string | ``|set table tbody's class |

## Events

| Name     | Parameters              | Description    |
| :------- | :---------------------- | :------------- |
| rowClick | (src: string, e: Event) | click this row |

# fg-table-column

## Properties

| Props       | Type     | Default                                    | Description                    |
| :---------- | :------- | :----------------------------------------- | :----------------------------- |
| show        | string   | `` | set th title                          |
| label       | string   | `` | set label as data properties          |
| width       | string   | `` |set th width `50px or 15%`             |
| tbodyClass  | string   | ``|set table tbody's class                 |
| formatter   | function | ``| format data in one colume              |
| hidden      | boolean  | `false`                                    | set this column show or hidden |
| cellClass   | string   | `` | `left/center/right` or set `td` class |
| headerClass | string   | `` | set `th` class                        |
