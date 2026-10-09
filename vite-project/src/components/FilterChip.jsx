export const FilterChip = (props) => {
    return (

<div className="filter-chip ">
          <input type="checkbox" id="filterCheckbox" onClick={()=>props.setfilterChip(o=>!o)} />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
        </div>
    )}