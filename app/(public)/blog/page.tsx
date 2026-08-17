"use client";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogItem } from "@/interfaces/blog";
import { formatDate } from "@/lib/utils";

// ─── Mock Data ─────────────────────────────────────────────────────────────────
const ALL_POSTS: BlogItem[] = [
  {
    "id": 240,
    "date": "2025-11-14T15:28:59",
    "date_gmt": "2025-11-14T06:28:59",
    "guid": {
      "rendered": "https://thanhlv.ju.alive-web.site/blog/p240/"
    },
    "modified": "2026-08-17T17:58:23",
    "modified_gmt": "2026-08-17T08:58:23",
    "slug": "test-test-%e7%a7%91%e5%ad%a6%e8%80%85%e5%90%8c%e3%81%98%e3%81%8f%e6%9c%a8%e6%98%9f%e3%81%ae%e8%a1%9b%e6%98%9f%e3%81%a7%e3%81%82%e3%82%8b%e3%82%ab%e3%83%aa%e3%82%b9%e3%83%88%e3%81%a8%e3%82%ac-3",
    "status": "publish",
    "type": "blog",
    "link": "https://thanhlv.ju.alive-web.site/blog/p240/",
    "title": {
      "rendered": "444test test 科学者同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン 4"
    },
    "content": {
      "rendered": "<p>科学者たちはこうして初めて、地球以外の天体に氷殻に覆われた内部海がある証拠をつかんだ。現在では、同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン、海科学者たちはこうして初めて、地球以外の天体に氷殻に覆われた内部海がある証拠をつかんだ。現在では、同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン、海</p>\n<p>照明器具にファンが付属する「ファン付き照明」。<br />\nおしゃれな空間になることから人気ですが、デメリットがあることをご存知でしょうか。<br />\n実はホコリが溜まりやすい点や照明との干渉など、設置した後に後悔を抱える方も少なくないようで、採用する場合は機種の選び方や設置場所など、注意が必要な設備でもあります。</p>\n<p><strong>本記事では</strong>、<em>ファン付き照明のデメリットとともに</em>、<a href=\"https://www.google.com/\">失敗や後悔を防</a>ぐための対策についても解説します。<br />\n設置した後に感じられる効果などメリットについてもお伝えしますので、照明器具やシーリングファンについて悩んでいる方もぜひ参考にしてください。</p>\n<h2>ファン付き照明のデメリットとは？（h2）</h2>\n<p>はじめに、ファン付き照明を選んだ場合、どのようなデメリットを感じる可能性があるのか、12の注意点を紹介します。</p>\n<h3>ホコリが溜まりやすく頻繁に掃除が必要に（h3）</h3>\n<div id=\"attachment_89\" style=\"width: 2570px\" class=\"wp-caption aligncenter\"><img decoding=\"async\" aria-describedby=\"caption-attachment-89\" class=\"wp-image-89 size-full\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-scaled.png\" alt=\"\" width=\"2560\" height=\"853\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-scaled.png 2560w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-750x250.png 750w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-1024x341.png 1024w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-300x100.png 300w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-768x256.png 768w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-1536x512.png 1536w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-2048x683.png 2048w\" sizes=\"(max-width: 2560px) 100vw, 2560px\" /><p id=\"caption-attachment-89\" class=\"wp-caption-text\">ファン付き照明のデメリット：ホコリが溜まりやすい（キャプション）</p></div>\n<p>ファン付き照明で失敗・後悔を感じやすい点は、ホコリが溜まりやすく頻繁に掃除が必要になることです。</p>\n<p>夏や冬の時期に長く動作し続けるファン付き照明は、回転部分を中心にホコリをキャッチしやすい特徴を持っています。<br />\nまた、ファンと隣接する照明に対してもホコリが付着し、照明で照らされることで目立つことがあります。<br />\n頻繁に掃除が必要になることに大変さを感じる場合、失敗や後悔につながるでしょう。</p>\n<h3>サーキュレータータイプと羽根つきタイプを検討する（h3）</h3>\n<div id=\"attachment_20\" style=\"width: 540px\" class=\"wp-caption aligncenter\"><img decoding=\"async\" aria-describedby=\"caption-attachment-20\" class=\"size-full wp-image-20\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03.jpg\" alt=\"\" width=\"530\" height=\"795\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03.jpg 530w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03-500x750.jpg 500w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03-200x300.jpg 200w\" sizes=\"(max-width: 530px) 100vw, 530px\" /><p id=\"caption-attachment-20\" class=\"wp-caption-text\">ファン付き照明のデメリット対策：サーキュレータータイプを選択する（キャプション）</p></div>\n<p>ファン付き照明のデメリットを避けるためには、サーキュレータータイプのシーリングファンも検討してみましょう。<br />\n一般的にファン付き照明は羽根がむき出しになっていますが、サーキュレータータイプは枠や前面・背面にメッシュが付属していて、壁に当たったり子どもが羽根に物を当てるといった心配をせずに済みます。</p>\n<p>また、コンパクトであることから脱衣所などへの設置も可能です。</p>\n<h3>計画段階で天井の下地を設けておく（特に昇降機能をつける場合）（h3）</h3>\n<p>設置によって天井に荷重がかかること、地震が起きたとき落下することなどに不安を覚える方は、設計・施工時にしっかりした下地を作ることをおすすめします。</p>\n<p>特に昇降機能をつける場合は、昇降機自体の重量があること、昇降機構を天井に隠すため天井に余裕を持たせることなど、検討する事柄が増えますので注意が必要です。</p>\n<h2>ファン付き照明のデメリットと注意点まとめ（h2）</h2>\n<p><img decoding=\"async\" class=\"aligncenter size-full wp-image-22\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg\" alt=\"\" width=\"900\" height=\"530\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg 900w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-750x442.jpg 750w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-300x177.jpg 300w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-768x452.jpg 768w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></p>\n<p>シーリングファンと照明が一体となったファン付き照明について、主にデメリットとその対策を解説しました。<br />\nゆったりと回転するファンからの送風を受けられるファン付き照明は、温熱環境を整えおしゃれな空間を作ることに効果的です。</p>\n<p>一方で以下のとおり、複数のデメリットを指摘されることもあります。</p>\n<ul>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n</ul>\n<p>しかし、こうした課題は、それぞれ対策を取ることが可能です。</p>\n<ol>\n<li>手の届く範囲に設置、昇降機能取り付けで掃除に配慮</li>\n<li>手の届く範囲に設置、昇降機能取り付けで掃除に配慮</li>\n</ol>\n<blockquote><p>引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。</p></blockquote>\n",
      "protected": false
    },
    "featured_media": 22,
    "template": "",
    "blogcat": [
      13
    ],
    "class_list": [
      "post-240",
      "blog",
      "type-blog",
      "status-publish",
      "has-post-thumbnail",
      "hentry",
      "blogcat-cate3"
    ],
    "acf": [],
    "_links": {
      "self": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/240",
          "targetHints": {
            "allow": [
              "GET"
            ]
          }
        }
      ],
      "collection": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog"
        }
      ],
      "about": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/types/blog"
        }
      ],
      "version-history": [
        {
          "count": 2,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/240/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 252,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/240/revisions/252"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/media/22"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/media?parent=240"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "blogcat",
          "embeddable": true,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat?post=240"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    },
    "_embedded": {
      "wp:featuredmedia": [
        {
          "id": 22,
          "date": "2025-10-27T18:06:57",
          "slug": "blog-detail-img04",
          "type": "attachment",
          "link": "https://thanhlv.ju.alive-web.site/blog/p6/blog-detail-img04/",
          "title": {
            "rendered": "blog-detail-img04"
          },
          "author": 1,
          "featured_media": 0,
          "acf": [],
          "caption": {
            "rendered": ""
          },
          "alt_text": "",
          "media_type": "image",
          "mime_type": "image/jpeg",
          "media_details": {
            "width": 900,
            "height": 530,
            "file": "2025/10/blog-detail-img04.jpg",
            "filesize": 350624,
            "sizes": {
              "medium": {
                "file": "blog-detail-img04-750x442.jpg",
                "width": 750,
                "height": 442,
                "filesize": 62886,
                "mime_type": "image/jpeg",
                "source_url": "https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-750x442.jpg"
              },
              "thumbnail": {
                "file": "blog-detail-img04-300x177.jpg",
                "width": 300,
                "height": 177,
                "filesize": 16541,
                "mime_type": "image/jpeg",
                "source_url": "https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-300x177.jpg"
              },
              "medium_large": {
                "file": "blog-detail-img04-768x452.jpg",
                "width": 768,
                "height": 452,
                "filesize": 64915,
                "mime_type": "image/jpeg",
                "source_url": "https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-768x452.jpg"
              },
              "full": {
                "file": "blog-detail-img04.jpg",
                "width": 900,
                "height": 530,
                "mime_type": "image/jpeg",
                "source_url": "https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg"
              }
            },
            "image_meta": {
              "aperture": "0",
              "credit": "",
              "camera": "",
              "caption": "",
              "created_timestamp": "0",
              "copyright": "",
              "focal_length": "0",
              "iso": "0",
              "shutter_speed": "0",
              "title": "",
              "orientation": "0",
              "keywords": []
            }
          },
          "source_url": "https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg",
          "_links": {
            "self": [
              {
                "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/media/22",
                "targetHints": {
                  "allow": [
                    "GET"
                  ]
                }
              }
            ],
            "collection": [
              {
                "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/media"
              }
            ],
            "about": [
              {
                "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/types/attachment"
              }
            ],
            "author": [
              {
                "embeddable": true,
                "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/users/1"
              }
            ],
            "replies": [
              {
                "embeddable": true,
                "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/comments?post=22"
              }
            ]
          }
        }
      ],
      "wp:term": [
        [
          {
            "id": 13,
            "link": "https://thanhlv.ju.alive-web.site/blogcat/cate3/",
            "name": "cate3",
            "slug": "cate3",
            "taxonomy": "blogcat",
            "acf": [],
            "_links": {
              "self": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat/13",
                  "targetHints": {
                    "allow": [
                      "GET"
                    ]
                  }
                }
              ],
              "collection": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat"
                }
              ],
              "about": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/taxonomies/blogcat"
                }
              ],
              "wp:post_type": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog?blogcat=13"
                }
              ],
              "curies": [
                {
                  "name": "wp",
                  "href": "https://api.w.org/{rel}",
                  "templated": true
                }
              ]
            }
          }
        ]
      ]
    }
  },
  {
    "id": 238,
    "date": "2025-11-14T15:28:51",
    "date_gmt": "2025-11-14T06:28:51",
    "guid": {
      "rendered": "https://thanhlv.ju.alive-web.site/blog/p238/"
    },
    "modified": "2026-08-17T18:44:15",
    "modified_gmt": "2026-08-17T09:44:15",
    "slug": "test-test-%e7%a7%91%e5%ad%a6%e8%80%85%e5%90%8c%e3%81%98%e3%81%8f%e6%9c%a8%e6%98%9f%e3%81%ae%e8%a1%9b%e6%98%9f%e3%81%a7%e3%81%82%e3%82%8b%e3%82%ab%e3%83%aa%e3%82%b9%e3%83%88%e3%81%a8%e3%82%ac-2",
    "status": "publish",
    "type": "blog",
    "link": "https://thanhlv.ju.alive-web.site/blog/p238/",
    "title": {
      "rendered": "222222test test 科学者同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン 3"
    },
    "content": {
      "rendered": "<p>科学者たちはこうして初めて、地球以外の天体に氷殻に覆われた内部海がある証拠をつかんだ。現在では、同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン、海科学者たちはこうして初めて、地球以外の天体に氷殻に覆われた内部海がある証拠をつかんだ。現在では、同じく木星の衛星であるカリストとガニメデ、そして土星の衛星エンケラドスとタイタン、海</p>\n<p>照明器具にファンが付属する「ファン付き照明」。<br />\nおしゃれな空間になることから人気ですが、デメリットがあることをご存知でしょうか。<br />\n実はホコリが溜まりやすい点や照明との干渉など、設置した後に後悔を抱える方も少なくないようで、採用する場合は機種の選び方や設置場所など、注意が必要な設備でもあります。</p>\n<p><strong>本記事では</strong>、<em>ファン付き照明のデメリットとともに</em>、<a href=\"https://www.google.com/\">失敗や後悔を防</a>ぐための対策についても解説します。<br />\n設置した後に感じられる効果などメリットについてもお伝えしますので、照明器具やシーリングファンについて悩んでいる方もぜひ参考にしてください。</p>\n<h2>ファン付き照明のデメリットとは？（h2）</h2>\n<p>はじめに、ファン付き照明を選んだ場合、どのようなデメリットを感じる可能性があるのか、12の注意点を紹介します。</p>\n<h3>ホコリが溜まりやすく頻繁に掃除が必要に（h3）</h3>\n<div id=\"attachment_89\" style=\"width: 2570px\" class=\"wp-caption aligncenter\"><img decoding=\"async\" aria-describedby=\"caption-attachment-89\" class=\"wp-image-89 size-full\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-scaled.png\" alt=\"\" width=\"2560\" height=\"853\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-scaled.png 2560w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-750x250.png 750w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-1024x341.png 1024w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-300x100.png 300w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-768x256.png 768w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-1536x512.png 1536w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/fff-2048x683.png 2048w\" sizes=\"(max-width: 2560px) 100vw, 2560px\" /><p id=\"caption-attachment-89\" class=\"wp-caption-text\">ファン付き照明のデメリット：ホコリが溜まりやすい（キャプション）</p></div>\n<p>ファン付き照明で失敗・後悔を感じやすい点は、ホコリが溜まりやすく頻繁に掃除が必要になることです。</p>\n<p>夏や冬の時期に長く動作し続けるファン付き照明は、回転部分を中心にホコリをキャッチしやすい特徴を持っています。<br />\nまた、ファンと隣接する照明に対してもホコリが付着し、照明で照らされることで目立つことがあります。<br />\n頻繁に掃除が必要になることに大変さを感じる場合、失敗や後悔につながるでしょう。</p>\n<h3>サーキュレータータイプと羽根つきタイプを検討する（h3）</h3>\n<div id=\"attachment_20\" style=\"width: 540px\" class=\"wp-caption aligncenter\"><img decoding=\"async\" aria-describedby=\"caption-attachment-20\" class=\"size-full wp-image-20\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03.jpg\" alt=\"\" width=\"530\" height=\"795\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03.jpg 530w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03-500x750.jpg 500w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img03-200x300.jpg 200w\" sizes=\"(max-width: 530px) 100vw, 530px\" /><p id=\"caption-attachment-20\" class=\"wp-caption-text\">ファン付き照明のデメリット対策：サーキュレータータイプを選択する（キャプション）</p></div>\n<p>ファン付き照明のデメリットを避けるためには、サーキュレータータイプのシーリングファンも検討してみましょう。<br />\n一般的にファン付き照明は羽根がむき出しになっていますが、サーキュレータータイプは枠や前面・背面にメッシュが付属していて、壁に当たったり子どもが羽根に物を当てるといった心配をせずに済みます。</p>\n<p>また、コンパクトであることから脱衣所などへの設置も可能です。</p>\n<h3>計画段階で天井の下地を設けておく（特に昇降機能をつける場合）（h3）</h3>\n<p>設置によって天井に荷重がかかること、地震が起きたとき落下することなどに不安を覚える方は、設計・施工時にしっかりした下地を作ることをおすすめします。</p>\n<p>特に昇降機能をつける場合は、昇降機自体の重量があること、昇降機構を天井に隠すため天井に余裕を持たせることなど、検討する事柄が増えますので注意が必要です。</p>\n<h2>ファン付き照明のデメリットと注意点まとめ（h2）</h2>\n<p><img decoding=\"async\" class=\"aligncenter size-full wp-image-22\" src=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg\" alt=\"\" width=\"900\" height=\"530\" srcset=\"https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04.jpg 900w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-750x442.jpg 750w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-300x177.jpg 300w, https://thanhlv.ju.alive-web.site/wp/wp-content/uploads/2025/10/blog-detail-img04-768x452.jpg 768w\" sizes=\"(max-width: 900px) 100vw, 900px\" /></p>\n<p>シーリングファンと照明が一体となったファン付き照明について、主にデメリットとその対策を解説しました。<br />\nゆったりと回転するファンからの送風を受けられるファン付き照明は、温熱環境を整えおしゃれな空間を作ることに効果的です。</p>\n<p>一方で以下のとおり、複数のデメリットを指摘されることもあります。</p>\n<ul>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n<li>ホコリが集まりやすく掃除が大変になる</li>\n</ul>\n<p>しかし、こうした課題は、それぞれ対策を取ることが可能です。</p>\n<ol>\n<li>手の届く範囲に設置、昇降機能取り付けで掃除に配慮</li>\n<li>手の届く範囲に設置、昇降機能取り付けで掃除に配慮</li>\n</ol>\n<blockquote><p>引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。引用のテキストが入ります。</p></blockquote>\n",
      "protected": false
    },
    "featured_media": 0,
    "template": "",
    "blogcat": [
      8,
      4
    ],
    "class_list": [
      "post-238",
      "blog",
      "type-blog",
      "status-publish",
      "hentry",
      "blogcat-test-cate",
      "blogcat-cate11"
    ],
    "acf": [],
    "_links": {
      "self": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/238",
          "targetHints": {
            "allow": [
              "GET"
            ]
          }
        }
      ],
      "collection": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog"
        }
      ],
      "about": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/types/blog"
        }
      ],
      "version-history": [
        {
          "count": 2,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/238/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 253,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog/238/revisions/253"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/media?parent=238"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "blogcat",
          "embeddable": true,
          "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat?post=238"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    },
    "_embedded": {
      "wp:term": [
        [
          {
            "id": 8,
            "link": "https://thanhlv.ju.alive-web.site/blogcat/test-cate/",
            "name": "test cate",
            "slug": "test-cate",
            "taxonomy": "blogcat",
            "acf": [],
            "_links": {
              "self": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat/8",
                  "targetHints": {
                    "allow": [
                      "GET"
                    ]
                  }
                }
              ],
              "collection": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat"
                }
              ],
              "about": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/taxonomies/blogcat"
                }
              ],
              "wp:post_type": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog?blogcat=8"
                }
              ],
              "curies": [
                {
                  "name": "wp",
                  "href": "https://api.w.org/{rel}",
                  "templated": true
                }
              ]
            }
          },
          {
            "id": 4,
            "link": "https://thanhlv.ju.alive-web.site/blogcat/cate11/",
            "name": "小林 大将11",
            "slug": "cate11",
            "taxonomy": "blogcat",
            "acf": [],
            "_links": {
              "self": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat/4",
                  "targetHints": {
                    "allow": [
                      "GET"
                    ]
                  }
                }
              ],
              "collection": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blogcat"
                }
              ],
              "about": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/taxonomies/blogcat"
                }
              ],
              "wp:post_type": [
                {
                  "href": "https://thanhlv.ju.alive-web.site/wp-json/wp/v2/blog?blogcat=4"
                }
              ],
              "curies": [
                {
                  "name": "wp",
                  "href": "https://api.w.org/{rel}",
                  "templated": true
                }
              ]
            }
          }
        ]
      ]
    }
  },
];

const POSTS_PER_PAGE = 6;

// ─── Subcomponents ──────────────────────────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FeaturedPost({ post }: { post: any }) {
  return (
    <article className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 pb-20 border-b border-gray-100">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
            Nổi bật
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-5 h-[1px] bg-red-500"></span>
            <span className="text-xs font-bold text-red-500 uppercase tracking-[0.2em]">
              {post.category}
            </span>
          </span>
          <span className="text-gray-200">·</span>
          <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
        </div>

        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-gray-500 leading-relaxed text-base">{post.excerpt}</p>

        <div className="flex items-center gap-6 pt-2">
          <span className="text-sm text-gray-400">{post.date}</span>
          <Button
            variant="link"
            className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all"
          >
            Đọc tiếp{" "}
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: BlogItem }) {
  const image = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://thanhlv.ju.alive-web.site/wp/wp-content/themes/wp-templ/assets/img/blog/blog-eyecatch.jpg";
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
        <img
          src={image}
          alt={post?.title.rendered}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
            {post?._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0][0] && post._embedded['wp:term'][0][0].name}
          </span>
          <span className="text-xs text-gray-400 font-medium">{formatDate(post?.date)}</span>
        </div>
        <h3 className="line-clamp-2 text-xl font-bold text-gray-900 leading-snug group-hover:text-red-500 transition-colors duration-300">
          {post?.title.rendered}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post?.content.rendered}</p>
        <div className="pt-2 flex items-center justify-between">
          <Button
            variant="link"
            className="p-0 h-auto text-gray-900 group-hover:text-red-500 font-bold transition-all"
          >
            Đọc tiếp{" "}
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          {/* <span className="text-xs text-gray-400">{post.modified}</span> */}
        </div>
      </div>
    </article>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function BlogArchivePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featured = ALL_POSTS.find((p: any) => p.featured);

  const filtered = ALL_POSTS.filter((post: any) => {
    const matchCat = activeCategory === "Tất cả" || post.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Exclude featured from grid only when showing "Tất cả" and no search
  const gridPosts =
    activeCategory === "all" && searchQuery === ""
      ? filtered.filter((p: any) => !p.featured)
      : filtered;

  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  // const paginated = gridPosts.slice(
  //   (currentPage - 1) * POSTS_PER_PAGE,
  //   currentPage * POSTS_PER_PAGE
  // );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  //   setCurrentPage(1);
  // };

  // API BLOG CAT
  const [dataBlogcat, setDataBlogcat] = useState([]);
  useEffect(() => {
    const handlefetchCategoryBlog = async () => {
      try {
        const resBlogcat = await fetch("/api/blogcat");
        const text = await resBlogcat.text();

        if (!resBlogcat.ok) {
          throw new Error(`API lỗi ${resBlogcat.status}: ${text}`);
        }

        const data = JSON.parse(text);
        setDataBlogcat(data);
      } catch (error) {
        console.error("Blogcat error:", error);
      }
    };

    handlefetchCategoryBlog();
  }, []);

  // API BLOG ITEM
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    const handlefetchBlog = async () => {
      try {
        const resBlogcat = await fetch("/api/blog");
        const text = await resBlogcat.text();

        if (!resBlogcat.ok) {
          throw new Error(`API lỗi ${resBlogcat.status}: ${text}`);
        }

        const data = JSON.parse(text);
        setDataBlog(data);
      } catch (error) {
        console.error("Blog error:", error);
      }
    };

    handlefetchBlog();
  }, []);


  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Header ─────────────────────────────────────── */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-red-500"></span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500">
                  Tin tức & Bài viết
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                <span className="italic font-serif">tiny.</span> blog
              </h1>
              <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
                Những câu chuyện, cảm hứng và quan điểm từ đội ngũ của chúng tôi — về thiết kế, lối sống và những điều nhỏ bé đáng trân trọng.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                // value={searchQuery}
                // onChange={handleSearch}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition-all bg-gray-50"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mt-10 flex-wrap">
            {/* ALL */}
            <button
              key="all"
              onClick={() => handleCategoryChange("all")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === "all"
                ? "bg-gray-900 border-gray-900 text-white"
                : "bg-transparent border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                }`}
            >
              Tất cả
            </button>
            {/* Categories */}
            {dataBlogcat.map((cat: { id: string, name: string }) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border border-gray-200 ${activeCategory === cat.id
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-transparent text-gray-600 hover:border-gray-400 hover:text-gray-900 cursor-pointer"
                  }`}
              >
                {cat.name}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-400">
              {gridPosts.length} bài viết
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Featured Post — only show on default view */}
        {activeCategory === "all" && searchQuery === "" && featured && (
          <FeaturedPost post={featured} />
        )}
        {/* Grid */}
        {dataBlog.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-12">
            {dataBlog.map((post: BlogItem) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">Không tìm thấy bài viết nào.</p>
            <p className="text-sm mt-2">Hãy thử từ khoá khác hoặc chọn danh mục khác.</p>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={true}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setCurrentPage(n)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 ${currentPage === n
                ? "bg-gray-900 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-400"
                }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}