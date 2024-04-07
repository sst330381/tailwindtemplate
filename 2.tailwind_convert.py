import json
import re

def restore_classes(html_file, class_mappings):
    with open(html_file, 'r') as f:
        html_content = f.read()

    # 去除 HTML 内容中的反斜线
    html_content = html_content.replace('\\:', ':')
    # 使用正则表达式查找class属性中的类名
    class_pattern = r'class="([^"]+)"'
    matches = re.findall(class_pattern, html_content)

    # 遍历每个匹配项
    for match in matches:
        # 将类名以空格分隔为列表
        class_names = match.split()
        # 遍历每个类名
        for i, class_name in enumerate(class_names):
            if class_name in class_mappings:
                # 如果类名在映射中，替换为原版类名
                class_names[i] = class_mappings[class_name]
        # 更新HTML内容中的类名
        replaced_class = ' '.join(class_names)
        html_content = html_content.replace(match, replaced_class)

    # 将替换后的内容写回HTML文件
    with open(html_file, 'w') as f:
        f.write(html_content)

# 读取类名对应关系字典文件
with open('class_mappings.json', 'r') as f:
    class_mappings = json.load(f)

# 指定HTML文件路径
html_file = 'layout.tsx'

# 调用函数进行类名替换
restore_classes(html_file, class_mappings)
