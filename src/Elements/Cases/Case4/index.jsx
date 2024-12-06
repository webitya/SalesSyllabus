import { Card, Collapse, Steps, List } from 'antd';
import { 
  TeamOutlined, 
  SearchOutlined, 
  CheckCircleOutlined, 
  FileSearchOutlined 
} from '@ant-design/icons';
import ApexCharts from 'react-apexcharts';
import LayoutEl from '../../../Shared/LayoutEl';

const { Panel } = Collapse;
const { Step } = Steps;

export default function CaseStudy4() {
  const performanceData = {
    series: [{ name: 'Performance', data: [15, 30, 45, 60, 75] }],
    options: {
      chart: { type: 'line', toolbar: { show: false } },
      xaxis: {
        categories: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            xaxis: { 
              labels: { rotate: -45, style: { fontSize: '12px' } }
            },
            grid: { padding: { left: 5, right: 5 } },
          },
        },
      ],
    },
  };

  return (
    <LayoutEl>
      <div className="w-full bg-gradient-to-r from-purple-100 to-blue-100 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Case Study 4: Building a Sales and Marketing Team
          </h1>
          <p className="text-base md:text-lg">
            Company: All types (under 200 employees) | Location: Multiple
          </p>
        </div>

        {/* Problem Statement */}
        <Collapse className="mb-6 md:mb-8">
          <Panel header="Problem Statement" key="1" extra={<TeamOutlined />}>
            <p>Organizations were struggling to hire good salespeople, and hired salespeople were not performing well.</p>
          </Panel>
        </Collapse>

        {/* Approach and Findings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Approach and Findings</h2>
          <Steps direction="vertical" className="mb-4">
            <Step 
              title="Audit Process" 
              description="Examined hiring, screening, interviewing, and post-hiring processes." 
              icon={<FileSearchOutlined />} 
            />
            <Step 
              title="Findings" 
              description="Unconscious bias, inadequate screening, and unrealistic expectations from leadership." 
              icon={<CheckCircleOutlined />} 
            />
          </Steps>

          {/* Findings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card title="Key Findings" className="shadow-lg">
              <List
                dataSource={[
                  'Hiring: Generic approach with unconscious bias.',
                  'Screening: Lacked a scientific method.',
                  'Post-hiring: Partial support with long problem-solving duration.',
                  'Leadership: Unrealistic expectations with no focus on system building.',
                  'Talent Crunch: High cost and attrition of sales talent.',
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </div>
        </div>

        {/* What We Did */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="Hiring Process Optimization" className="shadow-lg">
            <List
              dataSource={[
                'Defined sales recruitment strategy and ICP.',
                'Developed sourcing channels.',
                'Built a customized screening process.',
                'Implemented performance management systems.',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>

          <Card title="Support Systems Implementation" className="shadow-lg">
            <List
              dataSource={[
                'Set up support systems to resolve daily work challenges.',
                'Built a system to manage the talent crunch.',
                'Provided tools for leadership to monitor team efforts.',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </div>

        {/* Output Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Output</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Results" className="shadow-lg">
              <List
                dataSource={[
                  'Built a highly effective sales and marketing team.',
                  'Implemented sufficient reporting systems.',
                  'Established excellent support systems for the sales team.',
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>

            <Card title="Performance Improvement" className="shadow-lg">
              <h3 className="text-xl font-bold mb-4">Sales Team Performance Over Time</h3>
              <ApexCharts 
                options={performanceData.options} 
                series={performanceData.series} 
                type="line" 
                height={350} 
              />
            </Card>
          </div>
        </div>
      </div>
    </LayoutEl>
  );
}
