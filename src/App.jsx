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
    { title: '案号', dataIndex: 'code', width: '10%', className: 'miniFont' },
    {
      title: '案件名称',
      dataIndex: 'name',
      width: '25%',
      className: 'miniFont',
    },
    { title: '案由', dataIndex: 'reason', width: '15%', className: 'miniFont' },
    {
      title: '日期',
      dataIndex: 'date',
      width: '20%',
      align: 'center',
      className: 'miniFont',
    },
    {
      title: '涉案金额',
      dataIndex: 'amount',
      align: 'right',
      width: '15%',
      className: 'miniFont',
      render: (a) => {
        return <>{'¥ ' + transformThousand(a)}</>;
      },
    },
    {
      title: '级别',
      dataIndex: 'progress',
      align: 'center',
      width: '0%',
      className: 'miniFont',
      render: (a) => {
        return (
          <Tag color="red" key={a}>
            {a}
          </Tag>
        );
      },
    },
    {
      title: '经办人',
      dataIndex: 'person',
      align: 'person',
      width: '10%',
      className: 'miniFont',
    },
  ],
  data: [
    {
      key: '1',
      code: '（2022）沪0116民初17378号',
      name: '上海枫宇物业管理有限公司与曹军英物业服务合同纠纷',
      reason: '物业服务合同纠纷',
      date: '2022年12月1日',
      amount: 5000,
      progress: '一审',
      person: '李平',
    },
    {
      key: '2',
      code: '（2022）沪0151民初8837号',
      name: '上海鸿裕投资管理有限公司与金孝柔房屋租赁合同纠纷',
      reason: '房屋租赁合同纠纷',
      date: '2022年12月9日',
      amount: 80000,
      progress: '一审',
      person: '张方',
    },
    {
      key: '3',
      code: '（2022）沪0106民初36654号',
      name: '中建三局第一建设工程有限责任公司与上海览海置业有限公司其他合同纠纷',
      reason: '其他合同纠纷',
      date: '2022年12月9日',
      amount: 350000,
      progress: '一审',
      person: '陈晓丽',
    },
    {
      key: '4',
      code: '（2022）沪0117民初16730号',
      name: '上海卓悦富荟商业管理有限公司与傅俊房屋租赁合同纠纷',
      reason: '房屋租赁合同纠纷',
      date: '2022年12月12日',
      amount: 1000000,
      progress: '一审',
      person: '李小璐',
    },
    {
      key: '5',
      code: '（2022）沪0116民初17378号',
      name: '恒蒂（上海）实业有限公司与上海多甜食品有限公司买卖合同纠纷',
      reason: '买卖合同纠纷',
      date: '2022年12月15日',
      amount: 500000,
      progress: '一审',
      person: '张圆圆',
    },
  ],
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'miniFont',
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
