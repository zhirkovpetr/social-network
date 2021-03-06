import React, {useState} from 'react';
import s from './Paginator.module.css'

type paginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalCount: number
    pageSize: number
}

export const Paginator = React.memo((props: paginatorPropsType) => {
    let portionSize = 30;
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [] as Array<number>
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={s.page}>
            {portionNumber > 1 &&
            <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>PR</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span
                        className={props.currentPage === p ? s.currentPage : ''}
                                 key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
})
