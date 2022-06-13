import StatisticCell from 'src/components/Statistic/StatisticCell'

type StatisticPageProps = {
  id: string
}

const StatisticPage = ({ id }: StatisticPageProps) => {
  return <StatisticCell id={id} />
}

export default StatisticPage
