import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './_css/breadCrumbs.css'

const BreadCrumbs = (
    crumbs: any
) => {

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {crumbs.map((crumb:any, index:any) => (
                        <li
                            key={index}
                            className={`breadcrumb-item h4 ${index === crumbs.length - 1 ? 'active' : ''}`}
                            aria-current={index === crumbs.length - 1 ? 'page' : undefined}
                        >
                            {index === crumbs.length - 1 ? (
                                crumb.title
                            ) : (
                               <Link className='text-decoration-none' to={crumb.path}><span className='hoverLight'>{crumb.title}</span> </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs