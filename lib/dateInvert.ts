import moment from "moment";

export default function dateInvert(date: string) {

    const t1 = moment(date)
    const t2 = moment()
    const diff = moment.duration(t2.diff(t1)).asDays();

    if (diff > 3) {
        return moment(date).format("YYYY-MM-DD")
    } else {
        return moment(date).fromNow()

    }


}

