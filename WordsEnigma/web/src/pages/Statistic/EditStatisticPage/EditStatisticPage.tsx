import EditStatisticCell from 'src/components/Statistic/EditStatisticCell'

type StatisticPageProps = {
  id: string
}

const EditStatisticPage = ({ id }: StatisticPageProps) => {
  return <EditStatisticCell id={id} />
}

export default EditStatisticPage
