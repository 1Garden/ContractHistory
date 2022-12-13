import './App.css';
import React from 'react';
import { Col, Collapse, Table, Progress, Tag } from 'antd';
import transformThousand from '../utils/func';

const { Panel } = Collapse;

// 历史履约情况
const performance = {
  col: [
    { title: '合同名称', dataIndex: 'name', width: '50%' },
    {
      title: '金额（万元）',
      dataIndex: 'amount',
      align: 'right',
      render: (a) => {
        return <>{'¥ ' + transformThousand(a)}</>;
      },
      width: '20%',
    },
    {
      title: '款项进度',
      dataIndex: 'progress',
      align: 'center',
      width: '40%',
      render: (a) => {
        return (
          <>
            <Progress
              percent={a * 100}
              size="small"
              style={{ paddingLeft: '10px', paddingRight: '10px' }}
            />
          </>
        );
      },
    },
  ],
  data: [
    {
      key: '1',
      name: '绿地控股集团采购合同',
      amount: 12000.0,
      progress: 0.42,
    },
    {
      key: '2',
      name: '智慧园区装修材料采购合同',
      amount: 5000.0,
      progress: 0.2,
    },
    {
      key: '1',
      name: '海尔智家股份有限公司',
      amount: 7,
      progress: 0.8,
    },
  ],
};

// 历史价格参考
const price = {
  col: [
    { title: '物料编码', dataIndex: 'code', width: '30%' },
    { title: '物料名称', dataIndex: 'name', width: '30%' },
    {
      title: '规格',
      dataIndex: 'type',
      align: 'center',
      width: '10%',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      align: 'center',
      width: '10%',
      render: (a) => {
        return (
          <Tag color="green" key={a}>
            {a}
          </Tag>
        );
      },
    },
    {
      title: '含税单价',
      dataIndex: 'unitPrice',
      align: 'right',
      width: '20%',
      render: (a) => {
        return <>{'¥ ' + transformThousand(a)}</>;
      },
    },
  ],
  data: [
    {
      key: '1',
      code: '101DPAA01A01',
      name: 'MARA-ZZBZJ',
      type: 'HIPS',
      unit: '套',
      unitPrice: 60,
    },
    {
      key: '2',
      code: '101DPAA01A02',
      name: 'MARA-ZZBBA',
      type: 'EVA',
      unit: '套',
      unitPrice: 80,
    },
    {
      key: '3',
      code: '101DPAA01A03',
      name: 'MMRA-ZZZEO',
      type: 'LDPE',
      unit: '套',
      unitPrice: 80,
    },
    {
      key: '4',
      code: '101DPAA01A04',
      name: 'MMRA-ZZKK',
      type: 'TPR',
      unit: '套',
      unitPrice: 23,
    },
    {
      key: '5',
      code: '101DPAA01A05',
      name: 'MARO-ZTSD',
      type: 'LDPE',
      unit: '套',
      unitPrice: 190.0,
    },
    {
      key: '6',
      code: '101DPAA01A06',
      name: 'MARO-ZTSE',
      type: 'TPR',
      unit: '套',
      unitPrice: 88,
    },
  ],
};

// 历史纠纷案件
const dispute = {
  col: [
    { title: '案件名称', dataIndex: 'name', width: '30%' },
    {
      title: '日期',
      dataIndex: 'date',
    },
    {
      title: '涉案金额',
      dataIndex: 'amount',
      align: 'right',
      render: (a) => {
        return <>{'¥ ' + transformThousand(a)}</>;
      },
    },
    {
      title: '经办人',
      dataIndex: 'person',
      align: 'person',
    },
  ],
  data: [
    {
      name: '关于某公司和某公司的款项纠纷案件',
      date: '2022-12-1',
      amount: 2345,
      person: '李某',
    },
  ],
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

function App() {
  return (
    <div>
      <Col span={8}>
        <Col span={24}>
          <Collapse bordered={false} defaultActiveKey={['1']} ghost>
            <Panel header="历史合同履约情况" key="1">
              <Table
                columns={performance.col}
                dataSource={performance.data}
                size="small"
                pagination={false}
              />
            </Panel>
          </Collapse>
        </Col>
        <Col span={24} style={{ height: '20px' }}></Col>

        <Collapse bordered={false} defaultActiveKey={['2']} ghost>
          <Panel header="历史价格参考" key="2">
            <Table
              columns={price.col}
              dataSource={price.data}
              size="small"
              pagination={false}
            />
          </Panel>
        </Collapse>
        <Col span={24} style={{ height: '20px' }}></Col>

        <Collapse bordered={false} defaultActiveKey={['3']} ghost>
          <Panel header="历史纠纷案件" key="3">
            <Table
              columns={dispute.col}
              dataSource={dispute.data}
              size="small"
              pagination={false}
            />
          </Panel>
        </Collapse>
      </Col>
    </div>
  );
}

export default App;
