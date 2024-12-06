import { Card, Collapse, Steps, List } from 'antd';
import { PieChartOutlined, FileSearchOutlined, BulbOutlined, DollarCircleOutlined, BarChartOutlined } from '@ant-design/icons';
import ApexCharts from 'react-apexcharts';
import LayoutEl from '../../../Shared/LayoutEl';

const { Panel } = Collapse;
const { Step } = Steps;

export default function CaseStudy2() {
  const marketingBudgetData = {
    series: [25, 20, 15, 20, 20], // % allocation for each channel
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Telemarketing', 'Webinars', 'Events', 'SEO', 'Other Channels'],
    },
  };

  const leadGrowthData = {
    series: [{
      name: 'Leads Generated',
      data: [30, 40, 60, 80, 100],
    }],
    options: {
      chart: {
        type: 'line',
      },
      xaxis: {
        categories: ['___Initial Audit Phase', 'Strategy Implementation', 'Sales Team Recruitment', 'Marketing and Sales', 'Sales Closure Improvements'],
      },
    },
  };

  return (
    <>
    <LayoutEl>
    <div className="w-full bg-gradient-to-r from-yellow-100 to-blue-100 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Case Study 2: Lead Generation for SAP and Oracle Partners</h1>
        <p className="text-lg">How we helped top partners achieve their sales targets</p>
      </div>

      {/* Problem Statement */}
      <Collapse className="mb-8">
        <Panel header="Problem Statement" key="1" extra={<FileSearchOutlined />}>
          <p>The organization is not able to achieve its sales target despite having budget and marketing spend.</p>
        </Panel>
      </Collapse>

      {/* Approach and Findings */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Approach and Findings</h2>
        <Steps direction="vertical" className="mb-4">
          <Step title="Audit" description="We audited the sales and marketing spend and KPIs." icon={<PieChartOutlined />} />
          <Step title="Findings" description="Discovered misallocations in budget and focus areas." icon={<BulbOutlined />} />
        </Steps>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Budget Misallocation</h3>
          <ApexCharts options={marketingBudgetData.options} series={marketingBudgetData.series} type="pie" height={350} />
        </div>
      </div>

      {/* What We Did */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card title="Marketing Strategy" className="shadow-lg">
          <List
            dataSource={[
              'Built a full-scale low-leakage marketing strategy',
              'Identified specific ICP (Ideal Customer Profile)',
              'Identified low-cost marketing channels',
              'Divided the budget across omnichannel marketing (Telemarketing, Webinars, Events)',
              'Built a marketing performance management system',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Card>
        <Card title="Sales Improvements" className="shadow-lg">
          <List
            dataSource={[
              'Recruited and onboarded a sales team',
              'Built effective sales pitches',
              'Provided support to the sales team for query resolution',
              'Set up a sales performance management system',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Card>
      </div>

      {/* Output */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Output</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="Marketing Results" className="shadow-lg">
            <List
              dataSource={[
                'All activities became measurable',
                'Organization received actionable insights',
                'Increased number of leads',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
          <Card title="Sales Results" className="shadow-lg">
            <List
              dataSource={[
                'Improved tracking of sales team efforts',
                'Reduced problem-solving times',
                'Increased sales closures',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </div>
      </div>

      {/* Lead Growth Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Lead Growth Over Time</h3>
        <ApexCharts options={leadGrowthData.options} series={leadGrowthData.series} type="line" height={350} />
      </div>
    </div>
    </LayoutEl>
    </>
  );
}
