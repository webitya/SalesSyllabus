import { Card, Collapse, Steps, List } from 'antd';
import { 
  TeamOutlined, 
  PhoneOutlined, 
  CheckCircleOutlined, 
  FileSearchOutlined 
} from '@ant-design/icons';
import ApexCharts from 'react-apexcharts';
import LayoutEl from '../../../Shared/LayoutEl';

const { Panel } = Collapse;
const { Step } = Steps;

export default function CaseStudy3() {
  const meetingRatioData = {
    series: [{ name: 'Meeting Ratio', data: [20, 30, 45, 60, 80] }],
    options: {
      chart: { type: 'line', toolbar: { show: false } },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      },
      responsive: [
        {
          breakpoint: 768,
          options: { 
            xaxis: { 
              labels: { rotate: -45, style: { fontSize: '10px' } } 
            } 
          },
        },
      ],
    },
  };

  return (
    <LayoutEl>
      <div className="w-full bg-gradient-to-r from-green-100 to-blue-100 p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Case Study 3: Reducing the Bounce Rate in Tele-calling Process
          </h1>
          <p className="text-base md:text-lg">
            Company: Manufacturing, IT Products & Services | Location: Maharashtra & Telangana
          </p>
        </div>

        {/* Problem Statement */}
        <Collapse className="mb-6 md:mb-8">
          <Panel header="Problem Statement" key="1" extra={<PhoneOutlined />}>
            <p>The company faced a high bounce rate in their telemarketing and inside sales approach.</p>
          </Panel>
        </Collapse>

        {/* Approach and Findings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Approach and Findings</h2>
          <Steps direction="vertical" className="mb-4">
            <Step 
              title="Audit" 
              description="Checked scripts, calling process, and team knowledge." 
              icon={<FileSearchOutlined />} 
            />
            <Step 
              title="Findings" 
              description="Team lacked training, motivation, and clarity." 
              icon={<CheckCircleOutlined />} 
            />
          </Steps>

          {/* Findings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card title="Findings" className="shadow-lg">
              <List
                dataSource={[
                  'Team not trained to handle objections',
                  'Team used generic communication',
                  'Team couldn’t ask the right questions',
                  'Lack of information capture during calls',
                  'Unorganized and unmotivated team',
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </div>
        </div>

        {/* What We Did */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card title="What We Did: Business Communication" className="shadow-lg">
            <List
              dataSource={[
                'Developed a business communication document',
                'Trained the team on effective communication',
                'Built a marketing performance management system',
                'Provided tools to manage work and efforts',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>

          <Card title="What We Did: Tools and Systems" className="shadow-lg">
            <List
              dataSource={[
                'Provided tools to track and manage calls',
                'Improved workflow with organized systems',
                'Monitored and analyzed team performance',
                'Established a structure for feedback and support',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </div>

        {/* Output Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Output</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Business Communication Improvements" className="shadow-lg">
              <List
                dataSource={[
                  'Improved business communication',
                  'High meeting ratio',
                ]}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>

            <Card title="Meeting Ratio Improvement" className="shadow-lg">
              <h3 className="text-xl font-bold mb-4">Meeting Ratio Over Time</h3>
              <ApexCharts 
                options={meetingRatioData.options} 
                series={meetingRatioData.series} 
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
