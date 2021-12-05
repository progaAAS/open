import { useSelector } from "react-redux";
import s from "./Table.module.css";
import format from 'date-fns/format'

const Table = () => {

  const items = useSelector(state => state.table.items); 

  const convertDate = (startDate) => {
   // var date = new Date(startDate);
    var formattedDate = format(new Date(), "yyyy-MM-dd");
	return formattedDate;
  }
  return (
		<table className={s.table}>
			<thead className={s.table__head}>
				<tr className={s.table__row}>
					<th className={s.table__hight}>ID</th>
					<th className={s.table__hight}>Meter</th>
					<th	className={s.table__hight}>Address</th>
					<th	className={s.table__hight}>Status</th>
					<th	className={s.table__hight}>Owner</th>
					<th	className={s.table__hight}>Data Submitted</th>
					<th	className={s.table__hight}>Project ID</th>
					<th	className={s.table__hight}>Quelue Position</th>
				</tr>
			</thead>
			<tbody className={s.table__body}>
				{items && items.map((user, i) => (
					<tr className={s.table__row} key={i}>
						<td className={s.table__down}>{user.id}</td>
						<td className={s.table__down}>{user.meter}</td>
						<td className={s.table__down}>{user.address}</td>
						<td className={s.table__down}>{user.status}</td>
            			<td className={s.table__down}>{user.owner}</td>
						<td className={s.table__down}>{convertDate(user.dataSubmitted)}</td>
						<td className={s.table__down}>{user.projectID}</td>
						<td className={s.table__down}>{user.queluePosition}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
