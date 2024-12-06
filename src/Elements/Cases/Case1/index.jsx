import { Card, Collapse, Steps, List } from 'antd';
import {
  TeamOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import ApexCharts from 'react-apexcharts';
import LayoutEl from '../../../Shared/LayoutEl';
const { Panel } = Collapse;
const { Step } = Steps;

export default function CaseStudy1() {
  const kpiData = {
    series: [{ name: 'KPI Achievement', data: [70, 90, 80, 60, 85] }],
    options: {
      chart: { type: 'bar', toolbar: { show: false }, responsive: [] },
      xaxis: {
        categories: ['Sales Target', 'Client Calls', 'Follow-ups', 'Proposals Sent', 'Deals Closed'],
      },
    },
  };

  const costBenefitData = {
    series: [55, 45],
    options: {
      chart: { type: 'pie', toolbar: { show: false } },
      labels: ['Cost Savings', 'Internal Cost'],
    },
  };

  return (
    <LayoutEl>
      <div className="w-full bg-gradient-to-r from-blue-100 to-pink-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Case Study: Sales Team Building</h1>
          <p className="text-lg">How we helped IT companies build a productive sales team</p>
        </div>

        {/* Client Information */}
        <Card title="Client Information" className="mb-8 shadow-lg">
          <p><strong>Clients:</strong> Oracle Partners, SAP Partners, IT Product Companies, etc.</p>
          <p><strong>Organization Size:</strong> Less than 75 employees</p>
          <p><strong>Location:</strong> Maharashtra, Hyderabad, Ahmedabad, New Delhi, Nagpur</p>
          <p><strong>Nature of Business:</strong> Selling ERP, software services, digital marketing</p>
        </Card>

        {/* Problem Statement */}
        <Collapse className="mb-8">
          <Panel header="Problem Statement" key="1" extra={<ExclamationCircleOutlined />}>
            <p>1. Not able to build a sales and marketing team.</p>
            <p>2. Not able to scale sales operations.</p>
          </Panel>
        </Collapse>

        {/* Client Aspiration */}
        <Card title="Client Aspiration" className="mb-8 shadow-lg">
          <p>To build a productive sales team.</p>
        </Card>

        {/* Approach */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Approach</h2>
          <Steps direction="vertical" className="mb-4">
            <Step title="Audit" description="Conducted audit to identify gaps." icon={<AuditOutlined />} />
            <Step title="KPI/OKR Setup" description="Set up KPIs and OKRs for the sales team." icon={<CheckCircleOutlined />} />
            <Step title="Recruitment Strategy" description="Created a customized recruitment strategy." icon={<TeamOutlined />} />
          </Steps>

          {/* KPI Chart */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">KPI Progress</h3>
            <ApexCharts options={kpiData.options} series={kpiData.series} type="bar" height={350} />
          </div>
        </div>

        {/* Output */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Output</h2>
          <List
            dataSource={[
              'Better management of the sales team',
              'Less than 48 hours turnaround time for resolving challenges',
              'Information dashboard to manage the team',
              'Data-driven culture established',
            ]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>

        {/* Summary */}
        <Card title="Summary" className="mb-8 shadow-lg">
          <p><FileTextOutlined /> The team’s efforts were not measured, resulting in blame games.</p>
          <p><FileTextOutlined /> No process was in place to address issues promptly.</p>
          <p><FileTextOutlined /> Company culture was unmeasurable; teams operated without standardization.</p>
        </Card>

        {/* Solution and Cost-Benefit Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Solution Implemented" className="shadow-lg">
            <p><CheckCircleOutlined /> Sales talent management including recruitment of sales team.</p>
            <p><CheckCircleOutlined /> Support desk for the sales team to resolve issues.</p>
          </Card>
          <Card title="Cost-Benefit Analysis" className="shadow-lg">
            <p><DollarCircleOutlined /> Managed per-hire cost lower than internal cost.</p>
            <ApexCharts options={costBenefitData.options} series={costBenefitData.series} type="pie" height={350} />
          </Card>
        </div>
      </div>
    </LayoutEl>
  );
}
