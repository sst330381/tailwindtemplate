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
    
    # 构建替换字典
    replace_dict = {}
    for match in matches:
        # 将类名以空格分隔为列表
        class_names = match.split()
        # 遍历每个类名
        for i, class_name in enumerate(class_names):
            if class_name in class_mappings:
                replaced_class_name = class_mappings[class_name]
                class_names[i] = replaced_class_name
                replace_dict[match] = ' '.join(class_names)
        # 统一进行替换
    for match, replaced_class in replace_dict.items():
        # 仅替换class属性中的匹配项
        html_content = html_content.replace('class="{}"'.format(match), 'class="{}"'.format(replaced_class))


    # 替换其他部分
    html_content = html_content.replace('\\', '').replace('class=', 'className=')

    # 将替换后的内容写回HTML文件
    with open(html_file, 'w') as f:
        f.write(html_content)

# 读取类名对应关系字典文件
with open('class_mappings.json', 'r') as f:
    class_mappings = json.load(f)

# 指定HTML文件路径
<<<<<<< HEAD
# html_file = 'my-app\\src\\app\\components\\maketing\\sections\\pricing\\page.js'
html_file = 'my-app\\src\\app\\page.tsx'
=======
html_file = 'my-app\\src\\app\\components\\maketing\\sections\\pricing\\page.js'
>>>>>>> 71158ed558e429a0e18fafd84461eadcdddd373a

# 调用函数进行类名替换
restore_classes(html_file, class_mappings)
