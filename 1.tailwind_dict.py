import re
import json

def extract_class_mappings(css_content):
    """
    从CSS内容中提取类名和对应样式
    """
    class_mappings = {}
    matches = re.finditer(r'\.([^{]+)\s*\{([^}]+)\}', css_content)
    for match in matches:
        class_name = match.group(1).strip()
        styles = match.group(2).strip()
        class_mappings[class_name] = styles
    return class_mappings

def find_class_mappings(original_css_file, compiled_css_file):
    """
    比较两个CSS文件中的类名，并返回编译后类名和原版类名的对应关系
    """
    # 读取原版 CSS 文件
    with open(original_css_file, 'r') as f:
        original_content = f.read()
    original_classes = extract_class_mappings(original_content)

    # 读取编译后 CSS 文件
    with open(compiled_css_file, 'r') as f:
        compiled_content = f.read()
    compiled_classes = extract_class_mappings(compiled_content)

    # 对比两个字典，找出对应关系
    class_mappings = {}
    prev_compiled_style = None
    prev_original_style = None
    findStyle = False
    lastClass = None

    for compiled_class, compiled_style in compiled_classes.items():
        findStyle = False
        lastClass = None
        for original_class, original_style in original_classes.items():
            if compiled_style == original_style: #找到相同样式
                findStyle = True  #临时变量   找到
                lastClass = original_class  #临时变量  存储对应的class
                if prev_compiled_style is not None and prev_original_style is not None and prev_compiled_style == prev_original_style: #前一个也相同，肯定是了
                    class_mappings[compiled_class] = original_class
                    findStyle = False  #初始化 临时变量
                    lastClass = None 
                    break
            prev_original_style = original_style
        if findStyle == True: #找到了，但是每个匹配项前一个的样式都不同，那就取最后一个找到的类名
            class_mappings[compiled_class] = lastClass
        prev_compiled_style = compiled_style

    return class_mappings

def save_mappings_to_file(class_mappings, output_file):
    """
    将类名对应关系写入JSON文件
    """
    with open(output_file, 'w') as f:
        json.dump(class_mappings, f, indent=4)

# 指定原版和编译后的 CSS 文件路径
original_css_file = 'components.css'
compiled_css_file = 'compiled.css'
output_file = 'class_mappings.json'

# 找出类名对应关系
mappings = find_class_mappings(original_css_file, compiled_css_file)

# 将类名对应关系存储到新文件中
save_mappings_to_file(mappings, output_file)
