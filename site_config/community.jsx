import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
          {
              img: 'https://img.alicdn.com/tfs/TB1qqkLKxnaK1RjSZFBXXcW7VXa-1830-982.png',
              title: '双十一献礼 | Nacos Star破两万的回顾与展望',
              dateStr: 'Nov 3, 2021',
              content: 'Nacos Github Star数突破两万，从18年开始开源受到大家的普遍关注，借此机会向大家回顾一下Nacos的发展和后续的规划，帮助大家更了解Nacos。',
              link: '/zh-cn/blog/up-to-2w-star.html',
          },
          {
              img: 'https://sino-cloud-base.oss-cn-hangzhou.aliyuncs.com/fileupload-develop/20210606/19a373eaefb44ec4d476a1dbbfce6489.jpg',
              title: 'Nacos 2.0.1 + 1.4.2 发布,业界率先支持MCP-OVER-XDS协议!',
              dateStr: 'May 10, 2021',
              content: 'Nacos 2.0.1 + 1.4.2 发布,在业界内，率先支持MCP-OVER-XDS协议，更好的践行控制平面和数据平面解耦的架构，在Mesh领域中会得到更大规模应用。',
              link: '/zh-cn/blog/2.0.1-release.html',
          },
          {
              img: 'https://img.alicdn.com/tfs/TB1i4ugBjDpK1RjSZFrXXa78VXa-1522-584.png',
              title: '虎牙直播在微服务改造方面的实践和总结',
              content: '文章整理自虎牙基础保障部中间件团队负责人张波（社区ID：zhangjimmy）在Dubbo Meetup 广州站沙龙上的分享，介绍虎牙在DNS、服务注册、CMDB和服务配置中心等方面的实践。',
              dateStr: 'Feb 10，2019',
              link: '/en-us/blog/huya-practice.html',
          },
          // {
          //     img: 'https://cdn.nlark.com/lark/0/2018/png/11189/1540738282849-61e2022a-46a9-4d81-ae16-6d6f0515450b.png',
          //     title: 'Nacos 进入CNCF landscape',
          //     content: 'Nacos 被CNCF 纳入landscape大图.CNCF（Cloud Native Compute Foundation） 是 Linux 基金会旗下的一个组织，旨在推动以容器为中心的云原生系统。从 2016 年 11 月，CNCF 开始维护了一个 Cloud Native Landscape 的 repo。',
          //     dateStr: 'Oct 28，2018',
          //     link: '/en-us/blog/cncf.html',
          // },
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us  through the DingTalk group (1 group is full, 2 group number: 30438813), or via the following channel.',
      list: [
          {
              img: '/img/mailinglist.png',
              imgHover: '/img/mailinglist_hover.png',
              title: 'Mailing List',
              link: 'mailto:nacos_dev@linux.alibaba.com',
          },
          {
              img: '/img/alibaba.png',
              imgHover: '/img/alibaba_hover.png',
              title: '#alibaba/Nacos',
              link: 'https://gitter.im/alibaba/nacos',
          },
          {
              img: '/img/segmentfault.png',
              imgHover: '/img/segmentfault_hover.png',
              title: 'segmentfault',
              link: 'https://segmentfault.com/t/nacos',
          },
          {
              img: '/img/weibo.png',
              imgHover: '/img/weibo_hover.png',
              title: '@Nacos',
              link: 'https://weibo.com/u/6574374908',
          },
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'Want to contribute to Nacos?',
      list: [
        {
          img: '/img/mailinglist.png',
          title: 'Mailing List',
          content: <span>Join the <a href="mailto:nacos_dev@linux.alibaba.com">mailing list </a>and discussion your ideas with us.</span>,
        },
        {
          img: '/img/issue.png',
          title: 'Issue',
          content: <span>Reporting issues via <a href="https://github.com/alibaba/nacos/issues">Github issues.</a></span>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the <a href="https://nacos.io/en-us/docs/what-is-nacos.html">documentation.</a></span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Send your awesome enhancement via <a href="https://github.com/alibaba/nacos/pulls">Pull requests.</a></span>,
        },
      ],
    },
    ecos: {
      title: 'Open Source Ecology Corelated',
      list: [
        {
          title: 'Dubbo and Dubbo Mesh',
          content: <span>Dubbo and Nacos are the classic combination from production practice of Alibaba's large-scale micro-service. Compared to traditional registry centers such as ZooKeeper and configuration center solutions, when building a microservice application platform by using cloud native and Service Mesh paradigm, with the use of Nacos in Dubbo, all the power of Dubbo in the large-scale microservice management, traffic management, service integration and sharing can be fully released.</span>,
          tags: [
              {
                  text: 'Dubbo',
                  link: 'http://dubbo.io/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'Dubbo Mesh',
                  link: 'http://dubbo.io/',
                  bgColor: '#00D0D9',
              },
          ]
        },
        {
          title: 'Kubernetes and CNCF',
          content: <span>Nacos supports service discovery and dynamic configuration management required by Kubernetes and CNCF. Nacos can replace completely and seamlessly Kubernetes’ primary DNS-based Service Discovery solutions. Nacos is featured with providing more service governance, which includes management of service domain, service health and life cycle management, traffic management and intelligent routing strategy management and etc. Nacos also enhances the management of ConfigMap, including version configuration and gated launch and etc.</span>,
          tags: [
              {
                  text: 'Kubernetes',
                  link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'CNCF',
                  link: 'https://www.cncf.io/',
                  bgColor: '#00D0D9',
              },
          ]
        },
        {
          title: 'Spring Cloud',
          content: <span>Nacos is fully compatible and seamlessly supports the relevant API and main related functions of Spring Cloud. You can use Nacos as a configuration service for Spring Cloud Config Server or a better alternative for product of service discovery such as Eureka/Consul/ZooKeeper and etc. Nacos brings many feature enhancements required by the production and micro-service governance in configuration management and service management.</span>,
          tags: [
              {
                  text: 'Spring Cloud',
                  link: 'http://projects.spring.io/spring-cloud/',
                  bgColor: '#7A63FC',
              },
              {
                  text: 'Microservice',
                  link: 'http://microservices.io/',
                  bgColor: '#00D0D9',
              },
          ],
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
          {
              img: 'https://img.alicdn.com/tfs/TB1qqkLKxnaK1RjSZFBXXcW7VXa-1830-982.png',
              title: '双十一献礼 | Nacos Star破两万的回顾与展望',
              dateStr: 'Nov 3, 2021',
              content: 'Nacos Github Star数突破两万，从18年开始开源受到大家的普遍关注，借此机会向大家回顾一下Nacos的发展和后续的规划，帮助大家更了解Nacos。',
              link: '/zh-cn/blog/up-to-2w-star.html',
          },
          {
              img: 'https://sino-cloud-base.oss-cn-hangzhou.aliyuncs.com/fileupload-develop/20210606/19a373eaefb44ec4d476a1dbbfce6489.jpg',
              title: 'Nacos 2.0.1 + 1.4.2 发布,业界率先支持MCP-OVER-XDS协议!',
              dateStr: 'May 10, 2021',
              content: 'Nacos 2.0.1 + 1.4.2 发布,在业界内，率先支持MCP-OVER-XDS协议，更好的践行控制平面和数据平面解耦的架构，在Mesh领域中会得到更大规模应用。',
              link: '/zh-cn/blog/2.0.1-release.html',
          },
          {
              img: 'https://img.alicdn.com/tfs/TB1i4ugBjDpK1RjSZFrXXa78VXa-1522-584.png',
              title: '虎牙直播在微服务改造方面的实践和总结',
              content: '文章整理自虎牙基础保障部中间件团队负责人张波（社区ID：zhangjimmy）在Dubbo Meetup 广州站沙龙上的分享，介绍虎牙在DNS、服务注册、CMDB和服务配置中心等方面的实践。',
              dateStr: 'Feb 10，2019',
              link: '/en-us/blog/huya-practice.html',
          },
          // {
          //     img: 'https://cdn.nlark.com/lark/0/2018/png/11189/1540738282849-61e2022a-46a9-4d81-ae16-6d6f0515450b.png',
          //     title: 'Nacos 进入CNCF landscape',
          //     content: 'Nacos 被CNCF 纳入landscape大图.CNCF（Cloud Native Compute Foundation） 是 Linux 基金会旗下的一个组织，旨在推动以容器为中心的云原生系统。从 2016 年 11 月，CNCF 开始维护了一个 Cloud Native Landscape 的 repo。',
          //     dateStr: 'Oct 28，2018',
          //     link: '/en-us/blog/cncf.html',
          // },
      ]
    },
      contacts: {
          title: '联系我们',
          desc: '有问题需要反馈？可以优先通过钉钉群(1群已满，2群群号:30438813)联系我们，或者通过以下方式参与我们一起互动。',
          list: [
              {
                  img: '/img/mailinglist.png',
                  imgHover: '/img/mailinglist_hover.png',
                  title: '邮件列表',
                  link: 'mailto:nacos_dev@linux.alibaba.com'
              },
              {
                  img: '/img/alibaba.png',
                  imgHover: '/img/alibaba_hover.png',
                  title: 'Gitter',
                  link: 'https://gitter.im/alibaba/nacos',
              },
              {
                  img: '/img/segmentfault.png',
                  imgHover: '/img/segmentfault_hover.png',
                  title: 'segmentfault',
                  link: 'https://segmentfault.com/t/nacos'
              },
              {
                  img: '/img/weibo.png',
                  imgHover: '/img/weibo_hover.png',
                  title: '@Nacos',
                  link: 'https://weibo.com/u/6574374908',
              },
          ],
      },
      contributorGuide: {
          title: '贡献指南',
          desc: 'Nacos社区欢迎任何形式的贡献。',
          list: [
              {
                  img: '/img/mailinglist.png',
                  title: '邮件列表',
                  content: <span>发送 <a href="mailto:nacos_dev@linux.alibaba.com">邮件列表 </a>参与讨论。</span>,
              },
              {
                  img: '/img/issue.png',
                  title: '报告缺陷',
                  content: <span>通过<a href="https://github.com/alibaba/nacos/issues"> Github issues </a>报告缺陷。</span>,
              },
              {
                  img: '/img/documents.png',
                  title: '文档',
                  content: <span>优化Nacos <a href="http://nacos.io/zh-cn/docs/what-is-nacos.html"> 文档</a>。</span>,
              },
              {
                  img: '/img/pullrequest.png',
                  title: 'Pull Request',
                  content: <span>提交 <a href="https://github.com/alibaba/nacos/pulls"> Pull requests </a>来修复问题。</span>,
              },
          ],
      },
    ecos: {
      title: '开源生态相关',
      list: [
        {
          title: 'Dubbo and Dubbo Mesh',
          content: <span>Dubbo 及 Nacos是阿里巴巴大规模微服务生产实践中的经典组合，对比传统的如ZooKeeper等注册中心与配置中心解决方案，在使用云原生及Service Mesh范式构建微服务应用平台时，通过在Dubbo中使用Nacos，可以完全释放Dubbo在大规模微服务治理、流量管理、服务集成及共享上的所有威力。</span>,
          tags: [
            {
              text: 'Dubbo',
              link: 'http://dubbo.io/',
              bgColor: '#7A63FC',
            },
            {
              text: 'Dubbo Mesh',
              link: 'http://dubbo.io/',
              bgColor: '#00D0D9',
            },
          ]
        },
        {
          title: 'Kubernetes and CNCF',
          content: <span>Nacos 支持Kubernetes 以及 CNCF所需要的服务发现及动态配置管理的需求，Nacos可以完全无缝的替代Kubernetes的原生的DNS-based Service Discovery 解决方案，Nacos 提供了更多的服务治理侧的特性，这包括服务的域名管理，服务健康及生命周期管理，流量管理及智能路由策略管理等，Nacos也增强了对ConfigMap的管理，这包括版本配置、灰度发布等。</span>,
          tags: [
            {
              text: 'Kubernetes',
              link: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/',
              bgColor: '#7A63FC',
            },
            {
              text: 'CNCF',
              link: 'https://www.cncf.io/',
              bgColor: '#00D0D9',
            },
          ]
        },
        {
          title: 'Spring Cloud',
          content: <span>Nacos 完全兼容和无缝支持 Spring Cloud的相关API及主要相关功能，你可以将Nacos作为SpringCloud Config Server的配置服务或者Eureka/Consul/ZooKeeper等的服务发现产品的更好替代者，Nacos 在配置管理和服务管理上带来了很多面向生产及微服务治理所需要的特性增强。</span>,
          tags: [
            {
              text: 'Spring Cloud',
              link: 'http://projects.spring.io/spring-cloud/',
              bgColor: '#7A63FC',
            },
            {
              text: 'Microservice',
              link: 'http://microservices.io/',
              bgColor: '#00D0D9',
            },
          ],
        },
      ],
    },
  },
};
