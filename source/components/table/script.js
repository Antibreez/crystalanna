// if ($('.table').length) {
//   const makeTableTitles = table => {
//     const $row = $(table).find('.table__row:not(".table__row--title")')
//     const $cells = $row.find('.table__row-cell')

//     const $titleRow = $(table).find('.table__row--title')
//     const $titleCells = $titleRow.find('.table__title-cell')

//     $cells.each((id, cell) => {
//       $(cell).prepend(`<span class="table__row-cell-title">${$titleCells.eq($(cell).index()).text()}</span>`)
//     })
//   }

//   $('.table').each((idx, table) => {
//     makeTableTitles(table)

//     $(table)
//       .parent()
//       .bind('DOMSubtreeModified', function (e) {
//         const $table = $(e.target).find('.table')

//         if ($table.length && $table.find('.table__row').eq(1).find('.table__row-cell-title').length === 0) {
//           makeTableTitles($table[0])
//         }
//       })
//   })
// }
