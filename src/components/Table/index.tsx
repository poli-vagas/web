/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'
import { useTable, useSortBy, Row } from 'react-table'
import * as uuid from 'uuid'
import ButtonBlock from './components/ButtonBlock'
import ButtonDelete from './components/ButtonDelete'
import ButtonEdit from './components/ButtonEdit'
import ButtonNotification from './components/ButtonNotification'
import ButtonSensitive from './components/ButtonSensitive'
import ButtonView from './components/ButtonView'
import MoneyBagImg from '~/assets/images/money-bag-1.png'
import * as S from './styles'
import { money } from '~/utils/money'

type Column = {
  Header: string
  accessor: string
  align?: string
  width?: string
  type?: string
}

interface TableProps {
  columns: Column[]
  data: any[]
  count?: number
  page?: number
  loading?: boolean
  tabs?: React.ReactNode
  onGetNextPage?: (page: number) => void
  actions?: {
    view?: (id: number) => void
    notification?: (id: number) => void
    sendNotification?: (id: number) => void
    owl?: (id: number) => void
    select?: (id: string) => void
    delete?: (id: number) => void
    sensitive?: (id: number) => void
    edit?: (id: number) => void
  }
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  count,
  onGetNextPage,
  actions,
  loading,
  tabs,
  page = 1
}) => {
  const pages = count ? count / 10 : 1
  const hasActions = !!columns.filter((item) => item.type === 'actions').length

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      data,
      columns
    },
    useSortBy
  )

  const handlePageChange = (selected: number) => {
    const currentPage = selected + 1
    if (onGetNextPage) {
      onGetNextPage(currentPage)
    }
  }

  const renderEspecialColumns = (cell: object | any) => {
    switch (cell.column.type) {
      case 'money':
        return (
          <td
            {...cell.getCellProps()}
            key={uuid.v4()}
            style={{
              textAlign: cell.column?.align || 'left',
              width: cell.column?.width || '100%'
            }}
          >
            <S.MoneyColumn key={uuid.v4()}>
              {cell.value ? (
                <>
                  <S.MoneyImage src={MoneyBagImg} />
                  R$ {money(cell.value)}
                </>
              ) : (
                'N/A'
              )}
            </S.MoneyColumn>
          </td>
        )
      case 'actions':
        return (
          <td
            {...cell.getCellProps()}
            key={uuid.v4()}
            style={{
              textAlign: cell.column?.align || 'left',
              width: cell.column?.width || '100%'
            }}
          >
            <S.ActionsGroup>
              {Boolean(actions?.edit) && (
                <ButtonEdit
                  onClick={() =>
                    actions?.edit && actions?.edit(cell.row.original.id)
                  }
                />
              )}
              {Boolean(actions?.view) && (
                <ButtonView
                  onClick={() =>
                    actions?.view && actions?.view(cell.row.original.id)
                  }
                />
              )}
              {Boolean(actions?.notification) && (
                <ButtonNotification
                  onClick={() =>
                    actions?.notification &&
                    actions?.notification(cell.row.original.id)
                  }
                />
              )}

              {Boolean(actions?.sendNotification) && (
                <ButtonBlock
                  status={cell.row.original.status}
                  disabled={cell.row.original.status}
                  onClick={() =>
                    actions?.sendNotification &&
                    actions?.sendNotification(cell.row.original.id)
                  }
                />
              )}

              {Boolean(actions?.select) && (
                <ButtonBlock
                  status={cell.row.original.status}
                  onClick={() =>
                    actions?.select && actions?.select(cell.row.original.id)
                  }
                />
              )}

              {Boolean(actions?.delete) && (
                <ButtonDelete
                  onClick={() =>
                    actions?.delete && actions?.delete(cell.row.original.id)
                  }
                />
              )}

              {Boolean(actions?.sensitive) && (
                <ButtonSensitive
                  status={cell.row.original.sensitive}
                  onClick={() =>
                    actions?.sensitive &&
                    actions?.sensitive(cell.row.original.id)
                  }
                />
              )}
            </S.ActionsGroup>
          </td>
        )

      default:
        return (
          <td
            {...cell.getCellProps()}
            key={uuid.v4()}
            style={{
              textAlign: cell.column?.align || 'left',
              width: cell.column?.width || '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {cell.value ? cell.render('Cell') : 'N/A'}
          </td>
        )
    }
  }

  if (loading) {
    return <Skeleton count={5} height={20} />
  }

  return (
    <S.TableContainer>
      {tabs && tabs}
      <S.Container>
        <S.Table {...getTableProps()}>
          <S.Thead floatLastColumn={hasActions}>
            {headerGroups.map(
              (headerGroup: {
                getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>
                headers: any[]
              }) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={uuid.v4()}>
                  {headerGroup.headers.map(
                    (column: {
                      getHeaderProps: (
                        arg0: any
                      ) => JSX.IntrinsicAttributes &
                        React.ClassAttributes<HTMLTableHeaderCellElement> &
                        React.ThHTMLAttributes<HTMLTableHeaderCellElement>
                      getSortByToggleProps: () => any
                      render: (
                        arg0: string
                      ) =>
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined
                      isSorted: any
                      isSortedDesc: any
                      align: any
                      width: any
                    }) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        key={uuid.v4()}
                        style={{
                          textAlign: column?.align || 'left',
                          width: column?.width || '100%'
                        }}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <AiOutlineCaretDown />
                            ) : (
                              <AiOutlineCaretUp />
                            )
                          ) : (
                            ''
                          )}
                        </span>
                      </th>
                    )
                  )}
                </tr>
              )
            )}
          </S.Thead>

          <S.Tbody {...getTableBodyProps()} floatLastColumn={hasActions}>
            {rows.map(
              (row: {
                getRowProps: () => JSX.IntrinsicAttributes &
                  React.ClassAttributes<HTMLTableRowElement> &
                  React.HTMLAttributes<HTMLTableRowElement>
                cells: any[]
              }) => {
                prepareRow(row as Row<object>)
                return (
                  <tr {...row.getRowProps()} key={uuid.v4()}>
                    {row.cells.map((cell: any) => renderEspecialColumns(cell))}
                  </tr>
                )
              }
            )}
          </S.Tbody>
        </S.Table>
      </S.Container>
      {!!count && (
        <S.Tfoot>
          <S.TotalPage>
            <span>{(page - 1) * 10 + rows?.length}</span> de{' '}
            <span>{count}</span> registros
          </S.TotalPage>

          <S.WrapperPaginate>
            <ReactPaginate
              previousLabel={<FiChevronLeft />}
              nextLabel={<FiChevronRight />}
              breakLabel={'...'}
              pageCount={Math.ceil(pages)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={({ selected }: { selected: any }) =>
                handlePageChange(selected)
              }
              previousClassName={'control'}
              nextClassName={'control'}
              breakClassName={'break-me'}
              containerClassName={'container'}
              pageClassName={'page'}
              activeClassName={'active'}
              forcePage={page - 1}
            />
          </S.WrapperPaginate>
        </S.Tfoot>
      )}
    </S.TableContainer>
  )
}

export default Table
